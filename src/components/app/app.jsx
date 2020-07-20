import React from "react";
import PropTypes from "prop-types";
import {Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";

import MainPage from "../main-page/main-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Favorites from "../favorites/favorites.jsx";
import DetailedOffer from "../detailed-offer/detailed-offer.jsx"
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
    setId,
    currentOffer
  } = props;

  return (
     <>
     <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">

                  {isAuthorizationRequired ?
                    <Link className="header__nav-link header__nav-link--profile" to="/login">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link> :
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div
                        className="header__avatar-wrapper user__avatar-wrapper"
                        // style={{backgroundImage: `url('` + avatarUrl + `')`}}
                      ></div>
                      {/* <span className="header__user-name user__name">{email}</span> */}
                    </a>
                  }
                  <Link className="header__nav-link header__nav-link--profile" to="/favorite">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Private</span>
                  </Link>

                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  <Switch>

    <Route path="/" exact render={() => <MainPage
      cityOffers={cityOffers}
      city={city}
      changeCity={changeCity}
      cityList={cityList}
      userInformation={userInformation}
      isAuthorizationRequired={isAuthorizationRequired}
      setId={setId}
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

