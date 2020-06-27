import React from "react";
import PropTypes from 'prop-types';

class CityList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {data} = this.props;

    let cityArray = [];
    data.map((offer) => {
      let double = cityArray.indexOf(offer.city.name);
      if (double === -1) {
        cityArray.push(offer.city.name);
      }
    });

    return <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {cityArray.map((city, index) => <li className="locations__item" key={index}>
            <a className="locations__item-link tabs__item" href="#">
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
    // eslint-disable-next-line camelcase
    preview_image: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    title: PropTypes.string.isRequired,
    // eslint-disable-next-line camelcase
    is_favorite: PropTypes.bool.isRequired,
    // eslint-disable-next-line camelcase
    is_premium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    // eslint-disable-next-line camelcase
    max_adults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string.isRequired),
    host: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      // eslint-disable-next-line camelcase
      is_pro: PropTypes.bool.isRequired,
      // eslint-disable-next-line camelcase
      avatar_url: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
  }))
};

export default CityList;
