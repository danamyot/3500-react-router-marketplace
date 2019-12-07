import React, { Component } from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import { itemList, sellerList, reviewerList } from "./Data";
import "./style.css";
import Item from "./Item.jsx";
import ItemDetails from "./ItemDetails.jsx";
import Seller from "./Seller.jsx";
import Reviewer from "./Reviewer.jsx";

let renderAllItems = () => {
  return (
    <div className="home-container">
      <div className="all-sellers">
        <div>All sellers:</div>
        {sellerList.map(seller => {
          return (
            <div>
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
};

let renderSeller = routerData => {
  let sellerId = routerData.match.params.sid;
  let matchingSeller = sellerList.find(seller => seller.id === sellerId);
  return <Seller seller={matchingSeller} />;
};

let renderItemDetails = routerData => {
  let productId = routerData.match.params.pid;
  let matchingItem = itemList.find(item => item.id === productId);
  return <ItemDetails item={matchingItem} />;
};

let renderReviewer = routerData => {
  let reviewerId = routerData.match.params.rid;
  let matchingReviewer = reviewerList.find(
    reviewer => reviewer.id === reviewerId
  );
  return <Reviewer reviewer={matchingReviewer} />;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="nav-bar">
            <Link to="/" className="home-link">
              <h1 className="app-logo">Marketplace</h1>
            </Link>
          </div>
          <main>
            <Route exact={true} path="/" render={renderAllItems} />
            <Route exact={true} path="/seller/:sid" render={renderSeller} />
            <Route exact={true} path="/item/:pid" render={renderItemDetails} />
            <Route exact={true} path="/reviewer/:rid" render={renderReviewer} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
