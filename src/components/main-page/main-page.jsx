import React from "react";
import PropTypes from "prop-types";

import CityList from "../city-list/city-list.jsx";
import PlacesList from "../places-list/places-list.jsx";
import Map from "../map/map.jsx";

import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {
  offerProp,
  userInformationProp
} from "../../interface-prop-types/interface-prop-types.js";

const CityListWrapped = withActiveItem(CityList);
const PlacesListWrapped = withActiveItem(PlacesList);

const MainPage = (props) => {

  const {
    city,
    changeCity,
    cityList,
    cityOffers,
    openDetailOffer,
  } = props;
  // console.log(props);

  return (
    <>
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
                // openCard={(offer) => {
                //   // eslint-disable-next-line no-console
                //   console.log(offer);
                // }}
                isDetailedOffer={false}
                openDetailOffer={openDetailOffer}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={cityOffers}
                  currentOffer={`noCurrentOffer`}
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
  cityOffers: PropTypes.arrayOf(offerProp),
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  cityList: PropTypes.arrayOf(PropTypes.string.isRequired),
  userInformation: PropTypes.oneOfType([
    userInformationProp,
    PropTypes.string.isRequired,
  ]),
  isAuthorizationRequired: PropTypes.bool.isRequired,
  openDetailOffer: PropTypes.func.isRequired,
};

export default MainPage;
