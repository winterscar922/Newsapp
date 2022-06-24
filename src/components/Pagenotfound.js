import React, { Component } from "react";
import Imagelight from "./Error404";

export class Pagenotfound extends Component {
  render() {
    console.log(this.props);
    return  this.props.error404 && <Imagelight /> ;
  }
}

export default Pagenotfound;
