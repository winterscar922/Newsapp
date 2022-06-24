import React, { Component } from "react";

export class News extends Component {
  render() {
    // console.log(this.props)
    const {
      title,
      explaination,
      imageurl,
      readmore,
      author,
      time,
      name,
      mode,
    } = this.props;
    var c = mode;
    // console.log(c);
    return (
      <div>
        <div className="card" id="slidebar-push">
          <img
            className="card-img-top"
            src={imageurl}
            alt="Card image cap"
            style={{ height: "10rem" }}
          />
          <div
            className="card-body"
            style={{
              display: "-webkit-box",
              flex: "1 1 auto",
              flexDirection: "row",
              flexWrap: "wrap",
              alignSelf: "normal",
              backgroundColor: c === "dark" ? "#444444" : "white",
              color: c === "dark" ? "white" : "black",
            }}
          >
            <h5 className="card-title">
              {title.toString().replaceAll(",", " ")}..
            </h5>
            <p className="card-text">{explaination}...</p>
            <small className="text-muted">
              <p
                style={{
                  color: c === "dark" ? "#FFAFAF" : "black",
                  fontWeight: "500",
                }}
              >
                By {!author ? "Anonymous" : author[0] + author[1] + author[2]}{" "}
                updated on {` `}
                {new Date(time).toDateString()}
              </p>

              <span
                className="translate-middle badge rounded-pill bg-danger"
                id="source"
              >
                {name}
              </span>
            </small>
            <p
              className="card-text"
              style={{ width: "-webkit-fill-available" }}
            ></p>
            <a
              href={readmore}
              target="_blank"
              rel="noreferrer"
              className="btn btn-info"
              role="button"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
