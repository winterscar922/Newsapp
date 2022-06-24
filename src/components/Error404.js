import React, { Component } from "react";
import error404 from "./Error404.gif";

export class Error404 extends Component {
  render() {
    return (
      <div className="text-center error404">
        <img src={error404} alt="" className="error404-img"/>
      </div>
    );
  }
}

export default Error404;
