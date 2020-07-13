import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Switch, Route} from "react-router-dom";

import {ActionCreator} from "../../reducer/main/main.js";
import {getData} from "../../reducer/data/selectors.js";
import {getCity} from "../../reducer/main/selectors.js";
import {getCities} from "../../reducer/data/selectors.js";
import {getCityOffers} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {getServerResponse} from "../../reducer/user/selectors.js";
import MainPage from "../main-page/main-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {Operation, ActionCreator as UserActionCreator} from "../../reducer/user/user.js";

const App = (props) => {

  const {
    city,
    changeCity,
    cityList,
    cityOffers,
    isAuthorizationRequired,
    sendAuthorizationRequest,
    userInformation,
    changeAuthorizationStatus} = props;

  return <Switch>

    <Route path="/" exact render={() => <MainPage
      cityOffers={cityOffers}
      city={city}
      changeCity={changeCity}
      cityList={cityList}
      userInformation={userInformation}
      changeAuthorizationStatus={changeAuthorizationStatus}
    />}
    />

    <Route path="/login" render={() => <SignIn
      onSignInButtonClick = {sendAuthorizationRequest}
      userInformation={userInformation}
      isAuthorizationRequired={isAuthorizationRequired}
      changeAuthorizationStatus={changeAuthorizationStatus}
    />}
    />

  </Switch>;
};

App.propTypes = {
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
  changeAuthorizationStatus: PropTypes.func.isRequired,
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
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => {
    dispatch(ActionCreator.changeCity(city));
  },
  sendAuthorizationRequest: (data) => {
    dispatch(Operation.requiredAuthorization(data));
  },
  changeAuthorizationStatus: (status) => {
    dispatch(UserActionCreator.changeAuthorizationStatus(status));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
