import React from "react";
import PropTypes from "prop-types";

import {
  hotelCommentProp
} from "../../interface-prop-types/interface-prop-types.js";

const Review = (props) => {
  // eslint-disable-next-line no-console
  // console.log(props);

  const {hotelComments} = props;

  return (
    <>
      {hotelComments.map((comment, index) => {

        const date = new Date(
            (comment.date).slice(0, 4), // year
            (comment.date).slice(5, 7)); // month

        const correctDate = date.toLocaleString(`en-US`, {
          year: `numeric`,
          month: `long`,
        });

        return <li className="reviews__item" key={index}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img
                className="reviews__avatar user__avatar"
                src={comment.user.avatarUrl}
                width="54" height="54"
                alt="Reviews avatar"/>
            </div>
            <span className="reviews__user-name">
              {comment.user.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: (comment.rating * 20) + `%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {comment.comment}
            </p>
            <time className="reviews__time" dateTime={comment.date}>{correctDate}</time>
          </div>
        </li>;
      }
      )}
    </>
  );
};

Review.propTypes = {
  hotelComments: PropTypes.arrayOf(hotelCommentProp).isRequired,
};

export default Review;

