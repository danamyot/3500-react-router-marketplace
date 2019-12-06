import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { productReviews, itemList } from "./Data";

class Reviewer extends Component {
  render() {
    const { name, reviews } = this.props.reviewer;
    const itemReviews = reviews.map(id => {
      return productReviews.find(review => id == review.id);
    });
    return (
      <div className="card center">
        <div>{name}</div>
        <div className="item-reviews">
          {itemReviews.map(review => {
            return (
              <div className="item-review" key={review.id}>
                <Link to={"/item/" + review.productId}>
                  <div>
                    {itemList.find(item => item.id === review.productId).name}
                  </div>
                </Link>
                <div>{review.rating}</div>
                <div>{review.comment}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Reviewer;
