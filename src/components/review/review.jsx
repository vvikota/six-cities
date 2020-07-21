import React from "react";
import PropTypes from "prop-types";

const Review = (props) => {
  // eslint-disable-next-line no-console
  // console.log(props);

  const {hotelComments} = props;
  // console.log(hotelComments);

  return (
    <>
      {hotelComments.map((comment, index) => <li className="reviews__item" key={index}>
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
          </div>
          <span className="reviews__user-name">
            {comment.user.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              {/* <span style={{width: `94%`}}></span> */}
              <span style={{width: (comment.rating * 20) + `%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {comment.comment}
          </p>
          <time className="reviews__time" dateTime={comment.date}>{comment.date}</time>
        </div>
      </li>
      )}
    </>
  );
};

Review.propTypes = {
  hotelComments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }),
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }))
};

export default Review;

