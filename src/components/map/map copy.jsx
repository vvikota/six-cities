import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  drawMap() {
    let map;
    console.log(map)
    if (document.querySelector(`#map`).children.length > 0) {
      // eslint-disable-next-line no-console
      console.log(`map here`);
      const {data} = this.props;
      const center = [data[0].city.location.latitude, data[0].city.location.longitude];
      // console.log(center)
      // console.log(map)
      // const city = center;
      // map.setView(city, 13);
    } else {
      const {data} = this.props;
      const center = [data[0].city.location.latitude, data[0].city.location.longitude];
      // console.log(center)
      const city = center;
      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });
      
      const zoom = 12;
      map = leaflet.map(`map`, {
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

      data.map((offer) => {
        const offerCords = [offer.location.latitude, offer.location.longitude];
        leaflet.marker(offerCords, {icon}).addTo(map);
      });
      // console.log(map)
    }
  }

  componentDidUpdate() {
    this.drawMap();
  }

  render() {
    return (<div id="map"></div>);
  }
}

Map.propTypes = {
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

export default Map;
