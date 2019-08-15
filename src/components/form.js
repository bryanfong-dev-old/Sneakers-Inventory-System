import React from 'react';

const Form = ({ index, brand, style, size, upcID, submitInfo }) => (
  <form className='form' onSubmit={(e) => submitInfo(e, index)}>
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