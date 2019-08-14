import React from 'react';

const FilledSlot = ({ index, brand, style, size, upcID, editInfo, deleteInfo }) => (
  <div className='filled' >
    <p><span className="label">Brand : </span>{brand}</p>
    <p><span className="label">Style : </span>{style}</p>
    <p><span className="label">Size : </span>{size}</p>
    <p><span className="label">UPC ID : </span>{upcID}</p>
    <div className="buttons">
      <button onClick={() => editInfo(index)}>Edit</button>
      <button onClick={() => deleteInfo(index)}>Delete</button>
    </div>
  </div >
)

export default FilledSlot;





