import React from 'react';

const Item = ({ brand, style, size, upcID, status }) => (
  < div className='item' >
    <p>Brand : {brand}</p>
    <p>Style : {style}</p>
    <p>Size : {size}</p>
    <p>UPC ID : {upcID}</p>
  </div >
)

export default Item;