import React from "react";
import PropTypes from 'prop-types';

class CityList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {data, currentCity, chooseCity} = this.props;

    let cityArray = [];
    data.map((offer) => {
      let double = cityArray.indexOf(offer.city.name);
      if (double === -1) {
        cityArray.push(offer.city.name);
      }
    });
    // console.log(cityArray);

    return <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {cityArray.map((city, index) => <li className="locations__item" key={index}>
            <a
              className={city === currentCity ?
                `locations__item-link tabs__item tabs__item--active` :
                `locations__item-link tabs__item`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                chooseCity(city);
              }}
            >
              <span>{city}</span>
            </a>
          </li>)}

        </ul>
      </section>
    </div>;
  }
}

CityList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
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
  currentCity: PropTypes.string.isRequired,
  chooseCity: PropTypes.func.isRequired,
};

export default CityList;
