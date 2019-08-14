import React from 'react';
import { state } from '../state'
import Slot from '../components/slot'


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = state;
    this.addShoe = this.addShoe.bind(this);
  }
  addShoe(index) {
    console.log('nooo')
    const newState = JSON.parse(JSON.stringify(this.state));
    newState[index]["status"] = 'form';
    this.setState(newState);
  }

  render() {
    const slots = [];
    let i = 0;
    for (let key in this.state) {
      slots.push(<Slot
        key={i}
        index={i}
        addShoe={this.addShoe}
        {...this.state[key]}
      />)
      i++;
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

