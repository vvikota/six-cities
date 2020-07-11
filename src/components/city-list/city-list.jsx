import React from "react";
import PropTypes from 'prop-types';

const CityList = (props) => {

  const {cityList, currentCity, onChangeCity, hoverItem} = props;

  return <div className="cities tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">

        {cityList.map((city, index) => <li className="locations__item" key={index}>
          <a
            className={city === currentCity ?
              `locations__item-link tabs__item tabs__item--active` :
              `locations__item-link tabs__item`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onChangeCity(city);
            }}
            onMouseEnter={()=> {
              hoverItem(city);
            }}
          >
            <span>{city}</span>
          </a>
        </li>)}

      </ul>
    </section>
  </div>;
};

CityList.propTypes = {
  cityList: PropTypes.arrayOf(PropTypes.string.isRequired),
  currentCity: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  hoverItem: PropTypes.func.isRequired,
};

export default CityList;
