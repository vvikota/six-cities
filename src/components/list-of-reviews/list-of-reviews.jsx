import React from "react";
import PropTypes from "prop-types";

import Review from "../review/review.jsx"

const ListOfReviews = (props) => {
  // eslint-disable-next-line no-console
  // console.log(props);

  const {
    hotelComments,
  } = props;
  // console.log(hotelComments);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">{hotelComments.length}</span>
      </h2>
      <ul className="reviews__list">
        <Review hotelComments={hotelComments} />
      </ul>
    </>
  );
};

ListOfReviews.propTypes = {
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

export default ListOfReviews;

