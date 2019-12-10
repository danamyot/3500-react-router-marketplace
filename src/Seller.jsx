import React, { Component } from "react";
import { Link } from "react-router-dom";

import { itemList } from "./Data";

class Seller extends Component {
  render() {
    const sellerItems = itemList.filter(
      item => item.sellerId === this.props.seller.id
    );
    return (
      <div className="card center">
        <div>{this.props.seller.name}</div>
        <div>{this.props.seller.rating}</div>
        <div className="sellers-items">
          {sellerItems.map(item => {
            return (
              <div className="item" key={item.id}>
                <div>Items for sale:</div>
                <Link to={`/item/${item.id}`}>
                  <img src={item.image} alt={item.description} height="100px" />
                  <div>{item.name}</div>
                </Link>
                <div>{item.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Seller;
