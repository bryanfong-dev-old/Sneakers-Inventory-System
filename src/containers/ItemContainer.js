import React from 'react';

const MainContainer = ({ itemNum }) => (
  <div key={itemNum} className="item"> Box {itemNum}</div>
)

export default MainContainer;

