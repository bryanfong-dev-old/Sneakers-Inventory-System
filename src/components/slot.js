import React from 'react';
import EmptySlot from './emptySlot';
import Form from './form'
import FilledSlot from './filledSlot';

const Slot = ({ brand, style, size, upcID, status, index, editInfo, submitInfo, deleteInfo }) => {
  if (status === 'filled') {
    return <FilledSlot
      index={index}
      brand={brand}
      style={style}
      size={size}
      upcID={upcID}
      editInfo={editInfo}
      deleteInfo={deleteInfo}
    />
  } else if (status === 'form') {
    return <Form
      index={index}
      brand={brand}
      style={style}
      size={size}
      upcID={upcID}
      submitInfo={submitInfo}
    />
  } else {
    return <EmptySlot
      index={index}
      editInfo={editInfo}
    />
  }
}

export default Slot;