import React, { Component } from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import { itemList, sellerList, reviewerList } from "./Data";
import "./style.css";
import Cart from "./Cart.jsx";
import Item from "./Item.jsx";
import ItemDetails from "./ItemDetails.jsx";
import Seller from "./Seller.jsx";
import Reviewer from "./Reviewer.jsx";

const renderAllItems = () => {
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
};

const renderSeller = routerData => {
  let sellerId = routerData.match.params.sid;
  let matchingSeller = sellerList.find(seller => seller.id === sellerId);
  return <Seller seller={matchingSeller} />;
};

const renderReviewer = routerData => {
  let reviewerId = routerData.match.params.rid;
  let matchingReviewer = reviewerList.find(
    reviewer => reviewer.id === reviewerId
  );
  return <Reviewer reviewer={matchingReviewer} />;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }
  renderItemDetails = routerData => {
    let productId = routerData.match.params.pid;
    let matchingItem = itemList.find(item => item.id === productId);
    return <ItemDetails item={matchingItem} addToCart={this.addToCart} />;
  };
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
          <div className="nav-bar">
            <Link to="/" className="home-link">
              <h1 className="app-logo">Marketplace</h1>
            </Link>
            <Link to="/cart">
              <div className="nav-cart">
                <img
                  src="https://img.icons8.com/pastel-glyph/2x/shopping-cart--v2.png"
                  alt="cart"
                />
                <p className="cart-inventory">{this.state.cart.length}</p>
              </div>
            </Link>
          </div>
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
