import React, { Component } from "react";
import { Link } from "react-router-dom";
import { itemList, sellerList } from "./Data";
import Item from "./Item.jsx";

class HomeScreen extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="all-sellers">
          <div>All sellers:</div>
          {sellerList.map(seller => {
            return (
              <div key={seller.id}>
                <Link to={`/seller/${seller.id}`}>{seller.name}</Link>
              </div>
            );
          })}
        </div>
        <div className="all-items">
          {itemList.map(item => {
            return <Item item={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default HomeScreen;
