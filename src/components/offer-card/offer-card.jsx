
import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {
  offerProp
} from "../../interface-prop-types/interface-prop-types.js";

const OfferCard = (props) => {
  const {
    offer,
    onMouseEnter,
    openDetailOffer,
    isDetailedOffer
  } = props;

  const {
    isPremium,
    previewImage,
    price,
    description,
    type,
    id,
    title,
    rating,
  } = offer;

  return (
    <article
      className={isDetailedOffer ?
        `near-places__card place-card` :
        `cities__place-card place-card`
      }
      onMouseEnter={onMouseEnter}>

      {isPremium ? <div className="place-card__mark">
        <span>Premium</span>
      </div> : null}

      <div
        className={isDetailedOffer ?
          `place-card__image-wrapper near-places__image-wrapper` :
          `place-card__image-wrapper cities__image-wrapper`
        }>
        <a href="#"
          className="image-link"
          onClick={() => {
            openDetailOffer(id);
          }}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: (rating * 20) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">

          <Link
            className="place-card__name-link"
            to={`/offer/` + id}
            onClick={() => {
              // eslint-disable-next-line no-console
              // console.log(id);
              openDetailOffer(id);
            }}>
            {isDetailedOffer ? title : description}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerProp,
  openDetailOffer: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  isDetailedOffer: PropTypes.bool.isRequired,
};

export default OfferCard;
