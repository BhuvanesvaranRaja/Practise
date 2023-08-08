import React, { Component } from "react";
class component1 extends Component {
  constructor() {
    super();
    this.state = {
      color: "Green",
      name: "RAM",
    };
  }
  Change() {
    this.setState({
      color: "BLACk",
      name: "Manoj",
    });
  }
  render() {
    return (
      <>
        <p>
          Hello {this.state.name} is favourtie color {this.state.color}
        </p>
        <button onClick={() => this.Change()}>cc</button>
        <br></br>
      </>
    );
  }
}
export default component1;
