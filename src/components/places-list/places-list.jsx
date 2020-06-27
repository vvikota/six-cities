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
    const {data, openCard} = this.props;
    // eslint-disable-next-line no-console
    console.log(data);

    return <div className="cities__places-list places__list tabs__content">
      {data.map((offer, index) => <OfferCard
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
  data: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    // eslint-disable-next-line camelcase
    preview_image: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    title: PropTypes.string.isRequired,
    // eslint-disable-next-line camelcase
    is_favorite: PropTypes.bool.isRequired,
    // eslint-disable-next-line camelcase
    is_premium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    // eslint-disable-next-line camelcase
    max_adults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string.isRequired),
    host: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      // eslint-disable-next-line camelcase
      is_pro: PropTypes.bool.isRequired,
      // eslint-disable-next-line camelcase
      avatar_url: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
  })),
  openCard: PropTypes.func.isRequired,
};

export default PlacesList;
