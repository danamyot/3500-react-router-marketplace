import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Item extends Component {
  render() {
    return (
      <div className="card center">
        <Link to={`/item/${this.props.item.id}`}>
          <img height="100px" src={this.props.item.image} />
        </Link>
        <div>
          <div>{this.props.item.description}</div>
          <div>{this.props.item.price}</div>
          <Link to={`/seller/${this.props.item.sellerId}`}>
            Link to seller{" "}
          </Link>
        </div>
      </div>
    );
  }
}

export default Item;
