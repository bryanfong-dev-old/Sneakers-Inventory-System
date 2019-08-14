import React from 'react';
import { state } from '../state'
import Item from '../components/item'


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = state;
  }
  render() {
    const items = [];
    for (let key in this.state) {
      items.push(<Item {...this.state[key]} />)
    }

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

