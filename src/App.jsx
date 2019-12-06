import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { itemList, sellerList } from "./Data";
import "./style.css";
import Item from "./Item.jsx";
import ItemDetails from "./ItemDetails.jsx";
import Seller from "./Seller.jsx";

let renderAllItems = () => {
  return (
    <div>
      {itemList.map(item => {
        return <Item item={item} key={item.id} />;
      })}
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
