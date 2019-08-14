import React from 'react';
import EmptySlot from './emptySlot';
import Form from './form'
import FilledSlot from './filledSlot';

const Slot = ({ brand, style, size, upcID, status, index, addShoe, submitInfo }) => {
  if (status === 'filled') {
    return <FilledSlot
      brand={brand}
      style={style}
      size={size}
      upcID={upcID}
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
      addShoe={addShoe}
    />
  }
}

export default Slot;