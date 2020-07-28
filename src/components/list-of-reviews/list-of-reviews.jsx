import React from "react";
import PropTypes from "prop-types";

import Review from "../review/review.jsx";
import {
  hotelCommentProp
} from "../../interface-prop-types/interface-prop-types.js";

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
  hotelComments: PropTypes.arrayOf(hotelCommentProp).isRequired,
};

export default ListOfReviews;

