import React from 'react';

const FilledSlot = ({ brand, style, size, upcID }) => (
  <div className='filled' >
    <p><span className="label">Brand : </span>{brand}</p>
    <p><span className="label">Style : </span>{style}</p>
    <p><span className="label">Size : </span>{size}</p>
    <p><span className="label">UPC ID : </span>{upcID}</p>
  </div >
)

export default FilledSlot;





