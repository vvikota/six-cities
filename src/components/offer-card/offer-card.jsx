
import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const OfferCard = (props) => {
  const {
    offer,
    onMouseEnter,
    openDetailOffer,
    detailedOffer
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
      className={detailedOffer ?
        `near-places__card place-card` :
        `cities__place-card place-card`
      }
      onMouseEnter={onMouseEnter}>

      {isPremium ? <div className="place-card__mark">
        <span>Premium</span>
      </div> : null}

      <div
        className={detailedOffer ?
          `near-places__image-wrapper place-card__image-wrapper` :
          `cities__image-wrapper place-card__image-wrapper`
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
            {detailedOffer ? title : description}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    title: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string.isRequired),
    host: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
  }),
  openDetailOffer: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  detailedOffer: PropTypes.bool.isRequired,
};

export default OfferCard;
