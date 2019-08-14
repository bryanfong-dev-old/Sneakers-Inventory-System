import React from 'react';

const EmptySlot = ({ addShoe, index }) => (
  <div className='empty'>
    <button onClick={() => addShoe(index)}>Add Shoe</button>
  </div >
)

export default EmptySlot;