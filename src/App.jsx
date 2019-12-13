import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { initialItems, initialSellers } from "./Data";
import "./style.css";
import Item from "./Item.jsx";
import ItemDetails from "./ItemDetails.jsx";
import Seller from "./Seller.jsx";

let renderAllItems = () => {
  return (
    <div>
      {initialItems.map(item => {
        return <Item item={item} />;
      })}
    </div>
  );
};

let renderSeller = routerData => {
  let sellerId = routerData.match.params.sid;
  let matchingSellers = initialSellers.filter(seller => seller.id === sellerId);
  return <Seller seller={matchingSellers[0]} />;
};

let renderItemDetails = routerData => {
  let productId = routerData.match.params.pid;
  let matchingItems = initialItems.filter(item => item.id === productId);
  return <ItemDetails item={matchingItems[0]} />;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={renderAllItems} />
          <Route exact={true} path="/seller/:sid" render={renderSeller} />
          <Route exact={true} path="/item/:pid" render={renderItemDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
