import React, { Component } from "react";
import { Link } from "react-router-dom";
import { productReviews, itemList, reviewerList } from "./Data";

class Reviewer extends Component {
  render() {
    const reviewer = reviewerList.find(
      reviewer => reviewer.id === this.props.router.match.params.rid
    );
    const itemReviews = reviewer.reviews.map(id => {
      return productReviews.find(review => id == review.id);
    });
    return (
      <div className="card center">
        <div>{reviewer.name}</div>
        <div className="item-reviews">
          {itemReviews.map(review => {
            return (
              <div className="item-review" key={review.id}>
                <Link to={`/item/${review.productId}`}>
                  <div>
                    {itemList.find(item => item.id === review.productId).name}
                  </div>
                </Link>
                <div>{"\u2B50".repeat(Number(review.rating))}</div>
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
