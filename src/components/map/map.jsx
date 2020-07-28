import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

import {offerProp} from "../../interface-prop-types/interface-prop-types.js";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._map = null;
    this._icon = null;
    this._markersLayer = null;
  }

  componentDidMount() {
    const {offers, currentOffer} = this.props;
    const city = currentOffer === `noCurrentOffer` ? [52.38333, 4.9] : [currentOffer.location.latitude, currentOffer.location.longitude];

    this._icon = leaflet.icon({
      iconUrl: `../img/pin.svg`,
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

    offers.forEach((offer) => {
      this._markersLayer.addLayer(
          leaflet
          .marker([offer.location.latitude, offer.location.longitude], {icon: this._icon})
          .addTo(this._map));
    });
  }

  componentDidUpdate() {
    // console.log(`did update`);
    const {offers} = this.props;
    // console.log(currentOffer)
    if (offers.length > 1) {
      const city = [offers[0].city.location.latitude, offers[0].city.location.longitude];

      const zoom = offers[0].city.location.zoom;
      this._map.setView(city, zoom);
      this._markersLayer.clearLayers();

      offers.forEach((offer) => {
        this._markersLayer.addLayer(
            leaflet
            .marker([offer.location.latitude, offer.location.longitude], {icon: this._icon})
            .addTo(this._map));
      });
    }
  }

  render() {
    // console.log(this.props.offers);
    return (<div id="map"></div>);
  }
}

Map.propTypes = {
  currentOffer: PropTypes.oneOfType([
    offerProp,
    PropTypes.oneOf([`noCurrentOffer`])
  ]),
  offers: PropTypes.arrayOf(offerProp).isRequired
};

export default Map;
