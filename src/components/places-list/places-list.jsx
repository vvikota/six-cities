import React from "react";
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: 1,
    };
  }

  render() {
    const {offers, openCard} = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {offers.map((it, i) => <OfferCard
        offer={it}
        key={i}
        openCard={openCard}
      />)}
    </div>;
  }
}

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
  openCard: PropTypes.func.isRequired,
};

export default PlacesList;
