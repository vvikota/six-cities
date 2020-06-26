import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
// import {ActionCreator} from "../../reducer.js";
import CityList from "../city-list/city-list.jsx";
import PlacesList from "../places-list/places-list.jsx";
import Map from "../map/map.jsx";

const App = (props) => {
  const {userName, offers} = props;

  const city = `Paris`;

  const getPlaceOffers = (appOffers, place) => {
    let rezult = [];
    appOffers.map((placeOffers) => {
      // console.log(placeOffers.city);
      if (placeOffers.city === place) {
        rezult = placeOffers.offers;
      }
    });
    // console.log(rezult);
    return rezult;
  };

  let placeOffers = getPlaceOffers(offers, city);

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
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">{userName}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <CityList offers={offers}/>

        <div className="cities__places-wrapper">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
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

              <PlacesList
                offers={placeOffers}
                openCard={(offer) => {
                  // eslint-disable-next-line no-console
                  console.log(offer);
                }}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={placeOffers}
                />
              </section>
            </div>
          </div>
        </div>
      </main>;

    </>
  );
};

App.propTypes = {
  userName: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    offers: PropTypes.arrayOf(PropTypes.shape({
      premium: PropTypes.bool.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      placeType: PropTypes.string.isRequired,
      placeDiscription: PropTypes.string.isRequired,
      coord: PropTypes.array.isRequired,
    })).isRequired,
  })),

  // offers: PropTypes.arrayOf(PropTypes.shape({
  //   premium: PropTypes.bool.isRequired,
  //   price: PropTypes.number.isRequired,
  //   image: PropTypes.string.isRequired,
  //   rating: PropTypes.number.isRequired,
  //   placeType: PropTypes.string.isRequired,
  //   placeDiscription: PropTypes.string.isRequired,
  // })),
  // offers: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offersList: state.offersList,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
