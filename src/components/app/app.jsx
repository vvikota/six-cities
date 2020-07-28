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
import {
  offerProp,
  userInformationProp,
  hotelCommentProp
} from "../../interface-prop-types/interface-prop-types.js";

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
    hotelComments,
    nearOffers
  } = props;

  // console.log(currentOffer);

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
          nearOffers={nearOffers}
          openDetailOffer={openDetailOffer}
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
  cityOffers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  cityList: PropTypes.arrayOf(PropTypes.string.isRequired),
  isAuthorizationRequired: PropTypes.bool.isRequired,
  sendAuthorizationRequest: PropTypes.func.isRequired,
  userInformation: userInformationProp,
  openDetailOffer: PropTypes.func.isRequired,
  currentOffer: PropTypes.oneOfType([
    offerProp,
    PropTypes.oneOf([`noCurrentOffer`])
  ]),
  hotelComments: PropTypes.arrayOf(hotelCommentProp),
  nearOffers: PropTypes.oneOfType([
    PropTypes.arrayOf(offerProp),
    PropTypes.oneOf([`noNearOffers`])
  ])
};

export default App;

