import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import CityList from "../city-list/city-list.jsx";
import PlacesList from "../places-list/places-list.jsx";
import Map from "../map/map.jsx";

import withActiveItem from "../../hocs/with-active-item.js";

const CityListWrapped = withActiveItem(CityList);
const PlacesListWrapped = withActiveItem(PlacesList);

const MainPage = (props) => {

  const {city, changeCity, cityList, cityOffers, userInformation} = props;
  const {email, avatarUrl} = userInformation;
  // eslint-disable-next-line no-console
  // console.log(userInformation.avatarUrl);
  // const goToAuthorization = (e) => {
  //   e.preventDefault();
  //   changeAuthorizationStatus(true);
  // };

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

                  {userInformation === `noAuthorized` ?
                    <Link className="header__nav-link header__nav-link--profile" to="/login">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link> :
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div
                        className="header__avatar-wrapper user__avatar-wrapper"
                        style={{backgroundImage: `url('` + avatarUrl + `')`}}
                      ></div>
                      <span className="header__user-name user__name">{email}</span>
                    </a>
                  }

                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <CityListWrapped
          cityList={cityList}
          currentCity={city}
          onChangeCity={changeCity}
        />

        <div className="cities__places-wrapper">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use href="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
                {/* <select className="places__sorting-type" id="places-sorting">
                  <option className="places__option" value="popular" selected="">Popular</option>
                  <option className="places__option" value="to-high">Price: low to high</option>
                  <option className="places__option" value="to-low">Price: high to low</option>
                  <option className="places__option" value="top-rated">Top rated first</option>
                </select> */}
              </form>

              <PlacesListWrapped
                offers={cityOffers}
                openCard={(offer) => {
                  // eslint-disable-next-line no-console
                  console.log(offer);
                }}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={cityOffers}
                />
              </section>
            </div>
          </div>
        </div>
      </main>;
    </>
  );
};

MainPage.propTypes = {
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

export default MainPage;