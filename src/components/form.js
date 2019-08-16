import React from 'react';

const Form = ({ index, brand, style, size, upcID, submitInfo }) => (
  <div>
    <form className='form' onSubmit={(e) => submitInfo(e, index)}>
      <label htmlFor="brand"> Brand</label>
      <input id="brand" name="brand" type="text" defaultValue={brand} />
      <label htmlFor="style"> Style </label>
      <input id="style" name="style" type="text" defaultValue={style} />
      <label htmlFor="size"> Size </label>
      <input id="size" name="size" type="text" defaultValue={size} />
      <label htmlFor="upcID"> UPC ID </label>
      <input id="upcID" name="upcID" type="text" defaultValue={upcID} />
      <input className="submitButton" type="submit" value="Submit"></input>
    </form>
  </div>
)

export default Form;