import React from 'react';

const EmptySlot = ({ addShoe, i }) => (
  <div className='empty'>
    <button onClick={() => addShoe(i)}>Add Shoe</button>
  </div >
)

export default EmptySlot;