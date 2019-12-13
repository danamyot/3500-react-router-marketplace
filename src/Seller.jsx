import React, { Component } from "react";
import { Link } from "react-router-dom";
import { sellerList, itemList } from "./Data";

class Seller extends Component {
  render() {
    const sellerId = this.props.router.match.params.sid;
    const seller = sellerList.find(seller => seller.id === sellerId);
    const sellerItems = itemList.filter(item => item.sellerId === sellerId);
    return (
      <div className="card center">
        <div>{seller.name}</div>
        <div>{seller.rating}</div>
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
