import React from "react";
import PropTypes from "prop-types";
import {Switch, Route} from "react-router-dom";

import MainPage from "../main-page/main-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Favorites from "../favorites/favorites.jsx";
import withAuthorization from "../../hocs/with-authorization/with-authorization";
import privateRoute from "../../hocs/private-route/private-route.js";
import DetailedOffer from "../detailed-offer/detailed-offer.jsx"

const SignInWrapped = withAuthorization(SignIn);
const PrivateRouteForFavorite = privateRoute(Favorites);

const App = (props) => {

  const {
    city,
    changeCity,
    cityList,
    cityOffers,
    isAuthorizationRequired,
    sendAuthorizationRequest,
    userInformation} = props;

  return (<Switch>

    <Route path="/" exact render={() => <MainPage
      cityOffers={cityOffers}
      city={city}
      changeCity={changeCity}
      cityList={cityList}
      userInformation={userInformation}
      isAuthorizationRequired={isAuthorizationRequired}
    />}
    />

    <Route path="/login" exact render={() => <SignInWrapped
      onSignInButtonClick = {sendAuthorizationRequest}
      userInformation={userInformation}
      isAuthorizationRequired={isAuthorizationRequired}
    />}
    />

    <Route path="/offer/:id" render={() => <DetailedOffer/>}/>

    <PrivateRouteForFavorite
      isAuthorizationRequired={isAuthorizationRequired}
      optional={{path: `/favorite`}}
      params={{city, userInformation}}
    />

  </Switch>
  );
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
};

export default App;

