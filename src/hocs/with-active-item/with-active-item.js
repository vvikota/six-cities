import React from 'react';
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        hoverItemInfo: null,
      };
    }

    render() {
      // eslint-disable-next-line no-console
      // console.log(this.props);
      return <Component
        {...this.props}
        hoverItem={(info) => this.setState({
          hoverItemInfo: info
        })}
      />;
    }
  }

  WithActiveItem.propTypes = {
    cityList: PropTypes.arrayOf(PropTypes.string.isRequired),
    currentCity: PropTypes.string.isRequired,
    onChangeCity: PropTypes.func.isRequired,
    hoverItem: PropTypes.func.isRequired,
  } | {
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
    openCard: PropTypes.func.isRequired,
    hoverItem: PropTypes.func.isRequired,
  };

  return WithActiveItem;
};

export default withActiveItem;
