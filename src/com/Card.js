import React, { Component } from "react";

export default class Card extends Component {
  render() {
    let { title, sdddiscription, imgurl } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            !imgurl
              ? "https://img.etimg.com/thumb/msid-101799772,width-1070,height-580,imgsize-23050,overlay-economictimes/photo.jpg"
              : imgurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
