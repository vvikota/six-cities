import React from "react";
import PropTypes from "prop-types";

const OfferCard = (props) => {
  const {offer, openCard} = props;
  const {premium, image, price, placeDiscription, placeType} = offer;
  // console.log(props.offers);

  function changeBackground(e) {
    e.target.style.background = `red`;
  }

  return (
    <article className="cities__place-card place-card" onMouseEnter={changeBackground}>

      {premium ? <div className="place-card__mark">
        <span>Premium</span>
      </div> : null}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image" />
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
            <span></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a className="place-card__name-link" href="#" onClick={openCard}>{placeDiscription}</a>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.object.isRequired,
  openCard: PropTypes.func.isRequired,
};

export default OfferCard;
