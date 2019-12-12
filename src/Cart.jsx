import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cart extends Component {
  render() {
    let uniqueItems = this.props.cart.reduce((acc, currentItem) => {
      return acc.some(item => item.id === currentItem.id)
        ? acc
        : acc.concat(currentItem);
    }, []);
    return (
      <div className="cart-container card center">
        <div>Your Cart:</div>
        {this.props.cart.length === 0 ? (
          <p>There are no items in your cart!</p>
        ) : (
          <>
            <div className="cart-items">
              {uniqueItems.map(cartItem => {
                let quantity = this.props.cart.filter(
                  item => item.id === cartItem.id
                ).length;
                return (
                  <div className="cart-item card center" key={cartItem.id}>
                    <div className="cart-item-image">
                      <Link to={`/item/${cartItem.id}`}>
                        <img height="100px" src={cartItem.image} />
                      </Link>
                    </div>
                    <div className="cart-item-info">
                      <Link to={`/item/${cartItem.id}`}>
                        <div>{cartItem.name}</div>
                      </Link>
                      <div>{cartItem.description}</div>
                      <div>{cartItem.price}</div>
                    </div>
                    <div className="cart-item-quantity">
                      <div>Quantity: {quantity}</div>
                      <button onClick={() => this.props.addToCart(cartItem)}>
                        Add
                      </button>
                      <button
                        onClick={() => this.props.removeFromCart(cartItem.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <button onClick={this.props.checkoutCart}>Checkout</button>
          </>
        )}
      </div>
    );
  }
}

export default Cart;
