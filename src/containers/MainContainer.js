import React from 'react';
import { state } from '../state'
import Slot from '../components/slot'


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = state;
    this.editInfo = this.editInfo.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
    this.deleteInfo = this.deleteInfo.bind(this)
  }

  editInfo(index) {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState[index]["status"] = 'form';
    this.setState(newState);
  }

  submitInfo(e, index, brand) {
    e.preventDefault();
    const newState = JSON.parse(JSON.stringify(this.state));
    newState[index] = {
      brand: e.target[0].value,
      style: e.target[1].value,
      size: e.target[2].value,
      upcID: e.target[3].value,
      status: 'filled'
    }
    this.setState(newState);
  }

  deleteInfo(index) {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState[index] = {
      brand: '',
      style: '',
      size: '',
      upcID: '',
      status: 'empty'
    }
    this.setState(newState);
  }

  render() {
    const slots = [];
    let i = 0;
    for (let key in this.state) {
      slots.push(<Slot
        key={i}
        index={i}
        editInfo={this.editInfo}
        submitInfo={this.submitInfo}
        deleteInfo={this.deleteInfo}
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

