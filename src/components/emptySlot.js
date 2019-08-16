import React from 'react';

const EmptySlot = ({ index, editInfo }) => (
  <div className='empty'>
    <button className='addShoeButton' onClick={() => editInfo(index)}>
    </button>
  </div >
)

export default EmptySlot;