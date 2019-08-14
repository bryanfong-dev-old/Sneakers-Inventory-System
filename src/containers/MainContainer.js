import React from 'react';
import { state } from '../state'
import Slot from '../components/slot'


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = state;
  }
  render() {
    const slots = [];
    for (let key in this.state) {
      slots.push(<Slot {...this.state[key]} />)
    }

    return (
      <div id="main">
        <h1>Sneaks Inventory System</h1>
        <div id="inventory">
          {slots}
        </div>
      </div>
    )
  }
}

export default MainContainer;

