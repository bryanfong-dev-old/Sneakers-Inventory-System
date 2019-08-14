import React from 'react';
import { state } from '../state'
import Item from '../components/item'


class MainContainer extends React.Component {

  render() {

    const items = [];
    for (let key in state) {
      items.push(<Item />)
    }

    // console.log(items);
    return (
      <div id="main">
        <h1>Sneaks Inventory System</h1>
        <div id="inventory">
          {items}
        </div>
      </div>
    )
  }
}

export default MainContainer;

