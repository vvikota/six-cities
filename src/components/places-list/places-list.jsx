import React from "react";
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';

const PlacesList = (props) => {

  const {
    offers,
    hoverItem,
    openDetailOffer,
    detailedOffer,
  } = props;
  // console.log(props);

  return (
    <>
    <div className={detailedOffer ?
      `near-places__list places__list` :
      `cities__places-list places__list tabs__content`
    }>
      {offers.map((offer, index) => <OfferCard
        offer={offer}
        key={index}
        onMouseEnter={() => {
          hoverItem(offer);
        }}
        openDetailOffer={openDetailOffer}
        detailedOffer={detailedOffer}
      />)}
    </div>
  </>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  hoverItem: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.bool.isRequired,
  ]),
  openDetailOffer: PropTypes.func.isRequired,
  detailedOffer: PropTypes.bool.isRequired,
};

export default PlacesList;
