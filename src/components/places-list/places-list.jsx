import React from "react";
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: {},
    };
  }

  render() {
    const {offers, openCard} = this.props;
    // console.log(offers[0]);

    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, index) => <OfferCard
        offer={offer}
        key={index}
        openCard={openCard}
        onMouseEnter={() => {
          this.setState({
            activeOffer: offer,
          });
        }}
      />)}
    </div>;
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    premium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    placeType: PropTypes.string.isRequired,
    placeDiscription: PropTypes.string.isRequired,
    coord: PropTypes.array.isRequired,
  })).isRequired,
  openCard: PropTypes.func.isRequired,
};

export default PlacesList;
