import React from 'react';

const Form = ({ brand, style, size, upcID }) => (
  <form className='form'>
    <label htmlFor="brand">
      Brand <input id="brand" name="brand" type="text" defaultValue={brand} required />
    </label>
    <label htmlFor="style">
      Style <input id="style" name="style" type="text" defaultValue={style} required />
    </label>
    <label htmlFor="size">
      Size <input id="size" name="size" type="text" defaultValue={size} required />
    </label>
    <label htmlFor="upcID">
      UPC ID <input id="upcID" name="upcID" type="text" defaultValue={upcID} required />
    </label>
    <input type="submit" value="Submit"></input>

  </form>
)

export default Form;