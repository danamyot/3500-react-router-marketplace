import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    let uniqueItems = purchase => {
      return purchase.reduce((acc, currentItem) => {
        return acc.some(item => item.id === currentItem.id)
          ? acc
          : acc.concat(currentItem);
      }, []);
    };
    return (
      <div className="profile-container card center">
        <div>Your purchases:</div>
        {this.props.allPurchases.map((purchase, i) => {
          return (
            <div className="purchase" key={i}>
              <div>Purchase: {i + 1}</div>
              <div className="cart-items">
                {uniqueItems(purchase).map(purchaseItem => {
                  let quantity = purchase.filter(
                    item => item.id === purchaseItem.id
                  ).length;
                  return (
                    <div
                      className="cart-item card center"
                      key={purchaseItem.id}
                    >
                      <div className="cart-item-image">
                        <Link to={`/item/${purchaseItem.id}`}>
                          <img height="100px" src={purchaseItem.image} />
                        </Link>
                      </div>
                      <div className="cart-item-info">
                        <Link to={`/item/${purchaseItem.id}`}>
                          <div>{purchaseItem.name}</div>
                        </Link>
                        <div>{purchaseItem.description}</div>
                        <div>{purchaseItem.price}</div>
                      </div>
                      <div className="cart-item-quantity">
                        <div>Quantity: {quantity}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Profile;
