import React from "react";
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';

import {
  offerProp
} from "../../interface-prop-types/interface-prop-types.js";

const PlacesList = (props) => {

  const {
    offers,
    hoverItem,
    openDetailOffer,
    isDetailedOffer,
  } = props;
  // console.log(props);

  return (
    <>
    <div className={isDetailedOffer ?
      `places__list near-places__list` :
      `places__list cities__places-list tabs__content`
    }>
      {/* <div className={isDetailedOffer ?
      `places__list near-places__list` :
      `places__list cities__places-list tabs__content`
      }> */}
      {offers.map((offer, index) => <OfferCard
        offer={offer}
        key={index}
        onMouseEnter={() => {
          hoverItem(offer);
        }}
        openDetailOffer={openDetailOffer}
        isDetailedOffer={isDetailedOffer}
      />)}
    </div>
  </>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  hoverItem: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.bool.isRequired,
  ]),
  openDetailOffer: PropTypes.func.isRequired,
  isDetailedOffer: PropTypes.bool.isRequired,
};

export default PlacesList;
