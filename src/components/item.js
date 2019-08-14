import React from 'react';
import Empty from './empty';
import Display from './display';

const Item = ({ brand, style, size, upcID, status }) => {
  if (status === 'empty') return <Empty />
  else if (status === 'display') {
    return <Display
      brand={brand}
      style={style}
      size={size}
      upcID={upcID}
    />
  }
}

export default Item;