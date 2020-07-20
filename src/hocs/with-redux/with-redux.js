import React from 'react';
import PropTypes from "prop-types";

import {getData} from "../../reducer/data/selectors.js";
import {getCity} from "../../reducer/main/selectors.js";
import {getCities} from "../../reducer/data/selectors.js";
import {getCityOffers} from "../../reducer/data/selectors.js";
import {getCurrentOffer} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {getServerResponse} from "../../reducer/user/selectors.js";
import {getCurrentId} from "../../reducer/data/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {ActionCreator as MainActionCreator} from "../../reducer/main/main.js";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";
import {connect} from "react-redux";
import {compose} from "recompose";

const withRedux = (Component) => {
  class WithRedux extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      const {
        city,
        changeCity,
        cityList,
        cityOffers,
        isAuthorizationRequired,
        sendAuthorizationRequest,
        userInformation,
        setId,
        currentOfferId,
        currentOffer
      } = this.props;
      // console.log(this.props)

      return <Component
        {...this.props}
        city={city}
        changeCity={changeCity}
        cityList={cityList}
        cityOffers={cityOffers}
        isAuthorizationRequired={isAuthorizationRequired}
        sendAuthorizationRequest={sendAuthorizationRequest}
        userInformation={userInformation}
        setId={setId}
        currentOfferId={currentOfferId}
        currentOffer={currentOffer}
      />;
    }
  }

  WithRedux.propTypes = {
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
    city: PropTypes.string.isRequired,
    changeCity: PropTypes.func.isRequired,
    cityList: PropTypes.arrayOf(PropTypes.string.isRequired),
    isAuthorizationRequired: PropTypes.bool.isRequired,
    sendAuthorizationRequest: PropTypes.func.isRequired,
    userInformation: PropTypes.oneOfType([
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string.isRequired,
        isPro: PropTypes.bool.isRequired,
      }),
      PropTypes.string.isRequired,
    ]),
    setId: PropTypes.func.isRequired,
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
  };

  return WithRedux;
};

const mapStateToProps = (state, ownProps) => {
  const currentCity = (getCity(state) === `default` && getData(state)[0]) ?
    getData(state)[0].city.name :
    getCity(state);
  return Object.assign({}, ownProps, {
    city: currentCity,
    initialOffers: getData(state),
    cityList: getCities(state),
    cityOffers: getCityOffers(state, currentCity),
    isAuthorizationRequired: getAuthorizationStatus(state),
    userInformation: getServerResponse(state),
    currentOfferId: getCurrentId(state),
    currentOffer: getCurrentOffer(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => {
    dispatch(MainActionCreator.changeCity(city));
  },
  sendAuthorizationRequest: (data) => {
    dispatch(UserOperation.requiredAuthorization(data));
  },
  setId: (id) => {
    dispatch(DataActionCreator.changeCurrentId(id));
  },
});

export {withRedux};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRedux
);


