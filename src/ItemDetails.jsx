import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class ItemDetails extends Component {
  render() {
    return (
      <div className="card center ">
        <Link to={"/item/" + this.props.item.id}>
          <img height="100px" src={this.props.item.image} />
        </Link>
        <div>
          <div>{this.props.item.description}</div>
          <div>{`Left in stock: ${this.props.item.remaining}`}</div>
          <div>{this.props.item.cost}</div>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
