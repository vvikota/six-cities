import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._map = null;
    this._icon = null;
    this._markersLayer = null;
  }

  componentDidMount() {
    const {data} = this.props;

    let city = [52.38333, 4.9];
    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    this._map = leaflet.map(`map`, {
      center: city,
      zoom, // zoom: zoom
      zoomControl: false,
      marker: true
    });
    this._map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this._map);

    this._markersLayer = new leaflet.LayerGroup();
    this._markersLayer.clearLayers();

    data.forEach((offer) => {
      this._markersLayer.addLayer(
          leaflet
          .marker([offer.location.latitude, offer.location.longitude], {icon: this._icon})
          .addTo(this._map));
    });
  }

  componentDidUpdate() {
    const {data} = this.props;
    if (data.length > 1) {
      let city = [data[0].city.location.latitude, data[0].city.location.longitude];

      const zoom = data[0].city.location.zoom;
      this._map.setView(city, zoom);
      this._markersLayer.clearLayers();

      data.forEach((offer) => {
        this._markersLayer.addLayer(
            leaflet
            .marker([offer.location.latitude, offer.location.longitude], {icon: this._icon})
            .addTo(this._map));
      });
    }
  }

  render() {
    return (<div id="map" style={{height: `90vh`}}></div>);
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
};

export default Map;
