import React from 'react';

const EmptySlot = ({ index, editInfo }) => (
  <div className='empty'>
    <button onClick={() => editInfo(index)}>Add Shoe</button>
  </div >
)

export default EmptySlot;