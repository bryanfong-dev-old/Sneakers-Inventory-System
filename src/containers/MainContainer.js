import React from 'react';
import ItemContainer from './ItemContainer'

function createItems() {
  const items = [];
  for (let i = 1; i <= 10; i++) {
    items.push(<ItemContainer itemNum={i} />)
  }
  return items;
}

const MainContainer = () => (
  <div id="main">
    <h1>Sneaks Inventory System</h1>
    <div id="inventory">
      {createItems()}
    </div>
  </div>
)

export default MainContainer;

