import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers} = this.props;
    // eslint-disable-next-line no-console
    // console.log(offers);
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom, // zoom: zoom
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    offers.map((offer) => {
      const offerCords = offer.coord;
      leaflet.marker(offerCords, {icon}).addTo(map);
    });
  }

  render() {
    return (<div id="map"></div>);
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    premium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    placeType: PropTypes.string.isRequired,
    placeDiscription: PropTypes.string.isRequired,
  })),
};

export default Map;
