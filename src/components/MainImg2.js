import "./MainImg2.css";

import React, { Component } from "react";

class MainImg2 extends Component {
  render() {
    return (
      <div className="main-image">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default MainImg2;
