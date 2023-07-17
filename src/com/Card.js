import React, { Component } from "react";

export default class Card extends Component {
  render() {
    let { title, description, imgurl, gourl, author, time } = this.props;
    return (
      <div className="card">
        <img
          src={!imgurl ? "https://ik.imagekit.io/ikmedia/backlit.jpg" : imgurl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            By {author} at {time}
          </p>
          <a target="_blank" href={gourl} className="btn btn-dark">
            REad more
          </a>
        </div>
      </div>
    );
  }
}
