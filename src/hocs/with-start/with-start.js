import React from 'react';
import PropTypes from "prop-types";

import {getData} from "../../reducer/data/selectors.js";
import {getCity} from "../../reducer/main/selectors.js";
import {getCities} from "../../reducer/data/selectors.js";
import {getCityOffers} from "../../reducer/data/selectors.js";
import {getCurrentOffer} from "../../reducer/data/selectors.js";
import {getNearOffers} from "../../reducer/data/selectors.js";
import {getComments} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {getServerResponse} from "../../reducer/user/selectors.js";
import {getCurrentId} from "../../reducer/data/selectors.js";
import {ActionCreator as MainActionCreator} from "../../reducer/main/main.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {connect} from "react-redux";
import {compose} from "recompose";

const withStart = (Component) => {
  class WithStart extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return <Component
        {...this.props}
      />;
    }
  }

  WithStart.propTypes = {
    city: PropTypes.string.isRequired,
    cityList: PropTypes.arrayOf(PropTypes.string.isRequired),
    cityOffers: PropTypes.arrayOf(PropTypes.shape({
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
    isAuthorizationRequired: PropTypes.bool.isRequired,
    userInformation: PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
    }),
    currentOfferId: PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired]),
    currentOffer: PropTypes.shape({
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

    // changeCity: PropTypes.func.isRequired,
    // sendAuthorizationRequest: PropTypes.func.isRequired,
    // setId: PropTypes.func.isRequired,
  };

  return WithStart;
};

const mapStateToProps = (state, ownProps) => {
  const currentCity = (getCity(state) === `default` && getData(state)[0]) ?
    getData(state)[0].city.name :
    getCity(state);
  return Object.assign({}, ownProps, {
    city: currentCity,
    cityList: getCities(state),
    cityOffers: getCityOffers(state, currentCity),
    isAuthorizationRequired: getAuthorizationStatus(state),
    userInformation: getServerResponse(state),
    currentOfferId: getCurrentId(state),
    currentOffer: getCurrentOffer(state),
    hotelComments: getComments(state),
    nearOffers: getNearOffers(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => {
    dispatch(MainActionCreator.changeCity(city));
  },
  sendAuthorizationRequest: (data) => {
    dispatch(UserOperation.requiredAuthorization(data));
  },
  openDetailOffer: (id) => {
    dispatch(DataOperation.openDetailOffer(id));
  },
});

export {withStart};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStart
);


