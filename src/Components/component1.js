import React, { Component } from "react";
class component1 extends Component {
  constructor() {
    super();
    this.state = {
      color: "Green",
      name: "RAM",
      game: "COD",
    };
  }
  Change() {
    this.setState({
      color: "BLACk",
      name: "Manoj",
      game: "PUBG",
    });
  }
  render() {
    return (
      <>
        <p>
          Hello {this.state.name} is favourtie color {this.state.color} and my
          favorite game is {this.state.game}
        </p>
        <button onClick={() => this.Change()}>cc</button>
        <br></br>
      </>
    );
  }
}
export default component1;
