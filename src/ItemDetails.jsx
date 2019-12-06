import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { productReviews } from "./Data";

class ItemDetails extends Component {
  render() {
    const {
      id,
      name,
      description,
      price,
      remaining,
      image,
      reviewIds
    } = this.props.item;
    const itemReviews = reviewIds.map(id => {
      return productReviews.find(review => id == review.id);
    });
    return (
      <div className="card center ">
        <Link to={"/item/" + id}>
          <img height="100px" src={image} />
        </Link>
        <div className="item-description">
          <div>{name}</div>
          <div>{description}</div>
          <div>{price}</div>
          <div>{`Left in stock: ${remaining}`}</div>
          <div>{price}</div>
        </div>
        <div className="item-reviews">
          {itemReviews.map(review => {
            return (
              <div className="item-review" key={review.id}>
                <div>{review.rating}</div>
                <div>{review.comment}</div>
                <Link to={"/reviewer/" + review.reviewer}>
                  More reviews from this person
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ItemDetails;
