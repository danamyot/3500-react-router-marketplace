import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { initialItems, initialSellers } from "./Data";
import "./style.css";
import Item from "./Item.jsx";
import Seller from "./Seller.jsx";

let renderAllItems = () => {
  return (
    <div>
      {initialItems.map(item => {
        return (
          <Item
            cost={item.price}
            sellerId={item.sellerId}
            imageLocation={item.image}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

let renderSeller = routerData => {
  let sellerId = routerData.match.params.sid;
  let matchingSellers = initialSellers.filter(seller => seller.id === sellerId);
  return <Seller seller={matchingSellers[0]} />;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={renderAllItems} />
          <Route exact={true} path="/seller/:sid" render={renderSeller} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
