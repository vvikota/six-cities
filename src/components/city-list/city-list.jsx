import React from "react";
import PropTypes from 'prop-types';

class CityList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {offers} = this.props;

    return <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {offers.map((offer, index) => <li className="locations__item" key={index}>
            <a className="locations__item-link tabs__item" href="#">
              <span>{offer.city}</span>
            </a>
          </li>)}

        </ul>
      </section>
    </div>;
  }
}

CityList.propTypes = {
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
};

export default CityList;
