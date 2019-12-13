import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-home">
          <Link to="/" className="home-link">
            <h1 className="app-logo">Marketplace</h1>
          </Link>
        </div>
        <div className="nav-profile">
          <Link to="/profile">Profile</Link>
        </div>
        <div className="nav-cart">
          <Link to="/cart">
            <img
              src="https://img.icons8.com/pastel-glyph/2x/shopping-cart--v2.png"
              alt="cart"
            />
            <p className="cart-inventory">{this.props.cartInventory}</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
