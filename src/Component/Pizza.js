import React, { Component } from "react";
import pizza from "./img/pizza.jpg";

const Counter = {
  fontSize: "80px",
  backgroundColor: "black",
  borderRadius: "25px",
};

const Buttons = {
  fontSize: "28px",
  pading: "10px",
  backgroundColor: "white",
  borderRadius: "8px",
};

class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.takeOrder = this.takeOrder.bind(this);
  }
  takeOrder() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  cancelOrder() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        <img src={pizza} width="200" />
        <h1>Pizza Order Counter</h1>
        <h1 style={Counter}>{this.state.count}</h1>
        <button style={Buttons} onClick={this.takeOrder}>
          Take Order Button
        </button>
        <br />
        <br />

        <button style={Buttons} onClick={this.cancelOrder.bind(this)}>
          Cancel Button Order
        </button>
      </div>
    );
  }
}

export default Pizza;
