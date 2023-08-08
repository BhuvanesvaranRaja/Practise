import React, { Component } from "react";
export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  addIt = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  mulIt = () => {
    this.setState({
      count: this.state.count * 2,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.addIt}> +</button>
        <p>Count is {this.state.count}</p>
        <button onClick={this.mulIt}> x2</button>
      </>
    );
  }
}
