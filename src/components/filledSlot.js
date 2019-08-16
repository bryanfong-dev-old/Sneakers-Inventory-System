import React from 'react';

const FilledSlot = ({ index, brand, style, size, upcID, editInfo, deleteInfo }) => (

  <div className='filled' >
    <h4>Brand</h4>
    <p className="info">{brand || <br />}</p >
    <h4>Style</h4>
    <p className="info">{style || <br />}</p >
    <h4>Size</h4>
    <p className="info">{size || <br />}</p >
    <h4>UPC ID</h4>
    <p className="info">{upcID || <br />}</p >
    <div className="buttons">
      <button onClick={() => editInfo(index)}>Edit</button>
      <button onClick={() => deleteInfo(index)}>Delete</button>
    </div>
  </div >
)

export default FilledSlot;





