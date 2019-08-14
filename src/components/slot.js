import React from 'react';
import EmptySlot from './emptySlot';
import Form from './form'
import FilledSlot from './filledSlot';

const Slot = ({ brand, style, size, upcID, status, addShoe, i }) => {
  if (status === 'filled') {
    return <FilledSlot
      brand={brand}
      style={style}
      size={size}
      upcID={upcID}
    />
  } else if (status === 'form') {
    return <Form
      brand={brand}
      style={style}
      size={size}
      upcID={upcID}
    />
  } else {
    return <EmptySlot
      i={i}
      addShoe={addShoe}
    />
  }
}

export default Slot;