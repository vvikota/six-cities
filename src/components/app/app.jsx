import React from "react";
import PropTypes from "prop-types";
import {Switch, Route} from "react-router-dom";

import Header from "../header/header.jsx";
import MainPage from "../main-page/main-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Favorites from "../favorites/favorites.jsx";
import DetailedOffer from "../detailed-offer/detailed-offer.jsx";
import withAuthorization from "../../hocs/with-authorization/with-authorization";
import privateRoute from "../../hocs/private-route/private-route.js";

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
    userInformation,
    openDetailOffer,
    currentOffer,
    hotelComments
  } = props;
  console.log(props.nearOffers)

  return (
    <>
      <Header
        userInformation={userInformation}
        isAuthorizationRequired={isAuthorizationRequired}
      />

      <Switch>
        <Route path="/" exact render={() => <MainPage
          cityOffers={cityOffers}
          city={city}
          changeCity={changeCity}
          cityList={cityList}
          userInformation={userInformation}
          isAuthorizationRequired={isAuthorizationRequired}
          openDetailOffer={openDetailOffer}
        />}
        />

        <Route path="/login" exact render={() => <SignInWrapped
          onSignInButtonClick = {sendAuthorizationRequest}
          userInformation={userInformation}
          isAuthorizationRequired={isAuthorizationRequired}
        />}
        />

        <Route path="/offer/:id" render={() => <DetailedOffer
          currentOffer={currentOffer}
          hotelComments={hotelComments}
          cityOffers={cityOffers}
        />}
        />

        <PrivateRouteForFavorite
          isAuthorizationRequired={isAuthorizationRequired}
          optional={{path: `/favorite`}}
          params={{city, userInformation}}
        />
      </Switch>
    </>
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
  userInformation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
  }),
  openDetailOffer: PropTypes.func.isRequired,
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
  hotelComments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }),
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }))
};

export default App;

