import React from 'react';

const Form = ({ brand, style, size, upcID }) => (
  <form className='form'>
    <label for="brand">
      Brand <input id="brand" name="brand" type="text" value={brand} required />
    </label>
    <label for="style">
      Style <input id="style" name="style" type="text" value={style} required />
    </label>
    <label for="size">
      Size <input id="size" name="size" type="text" value={size} required />
    </label>
    <label for="upcID">
      UPC ID <input id="upcID" name="upcID" type="text" value={upcID} required />
    </label>
    <input type="submit" value="Submit"></input>

  </form>
)

export default Form;