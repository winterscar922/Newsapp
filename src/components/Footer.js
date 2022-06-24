import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return  (
      <div>
        <div
          className="footer-container"
          style={{
            backgroundColor:
              this.props.mode === "light" ? "#eae9e9" : "#444444",
          }}
        >
          <p
            className="center"
            style={{
              color: this.props.mode === "light" ? "black" : "#eae9e9",
            }}
          >
            Developed by Sumukha T.S
          </p>
          <div className="footer">
            <a
              href="https://github.com/winterscar922"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
