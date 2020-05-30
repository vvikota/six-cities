import React from "react";
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: {},
    };
  }

  render() {
    const {offers} = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {offers.map((it, i) => <OfferCard
        offer={it}
        key={i}
        openCard={(offer) => {
          // eslint-disable-next-line no-console
          console.log(offer);
        }}
        onMouseEnter={() => {
          this.setState({
            activeOffer: offers[i],
          });
        }}
      />)}
    </div>;
  }
}

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default PlacesList;
