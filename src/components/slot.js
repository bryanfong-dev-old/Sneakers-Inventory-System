import React from 'react';
import EmptySlot from './emptySlot';
import FilledSlot from './filledSlot';

const Slot = ({ brand, style, size, upcID, status }) => {
  if (status === 'empty') return <EmptySlot />
  else if (status === 'filled') {
    return <FilledSlot
      brand={brand}
      style={style}
      size={size}
      upcID={upcID}
    />
  }
}

export default Slot;