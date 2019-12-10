import React, { Component } from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import "./style.css";
import { itemList } from "./Data";
import NavBar from "./NavBar.jsx";
import ItemDetails from "./ItemDetails.jsx";
import Cart from "./Cart.jsx";
import Seller from "./Seller.jsx";
import Reviewer from "./Reviewer.jsx";
import HomeScreen from "./HomeScreen.jsx";

const renderAllItems = () => {
  return <HomeScreen />;
};

const renderSeller = routerData => {
  return <Seller router={routerData} />;
};

const renderReviewer = routerData => {
  return <Reviewer router={routerData} />;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }
  addToCart = item => {
    this.setState({ cart: this.state.cart.concat(item) });
  };
  removeFromCart = itemId => {
    let cartCopy = this.state.cart.slice();
    let indexToRemove = 0;
    cartCopy.forEach((cartItem, index) => {
      if (cartItem.id === itemId) {
        indexToRemove = index;
      }
    });
    cartCopy.splice(indexToRemove, 1);
    this.setState({ cart: cartCopy });
  };
  renderItemDetails = routerData => {
    let productId = routerData.match.params.pid;
    let matchingItem = itemList.find(item => item.id === productId);
    return <ItemDetails item={matchingItem} addToCart={this.addToCart} />;
  };
  renderCart = () => {
    return (
      <Cart
        cart={this.state.cart}
        removeFromCart={this.removeFromCart}
        addToCart={this.addToCart}
      />
    );
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar cartInventory={this.state.cart.length} />
          <main>
            <Route exact={true} path="/" render={renderAllItems} />
            <Route exact={true} path="/seller/:sid" render={renderSeller} />
            <Route
              exact={true}
              path="/item/:pid"
              render={this.renderItemDetails}
            />
            <Route exact={true} path="/reviewer/:rid" render={renderReviewer} />
            <Route exact={true} path="/cart" render={this.renderCart} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
