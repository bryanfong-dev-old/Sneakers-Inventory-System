import React from "react";

function createSlots() {
  const slots = [];
  for (let i = 0; i < 10; i++) {
    slots.push(<div className="item"> Item {i + 1}</div>)
  }
  return slots;
}

const MainContainer = () => (
  <div id="main">
    <h1>Sneaks Inventory System</h1>
    <div id="inventory">
      {createSlots()}
    </div>
  </div>
)

export default MainContainer;

