import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";
import offers from "./mocks/data.js";
import settings from "./mocks/settings.js";
import {reducer} from "./reducer.js";

const rawDataConversion = (allOffers) => {
  let rezultArray = [];

  allOffers.map((offer) => {
    let newOffer = {
      city: offer[`city`],
      previewImage: offer[`preview_image`],
      images: offer[`images`],
      title: offer[`title`],
      isFavorite: offer[`is_favorite`],
      isPremium: offer[`is_premium`],
      rating: offer[`rating`],
      type: offer[`type`],
      bedrooms: offer[`bedrooms`],
      maxAdults: offer[`max_adults`],
      price: offer[`price`],
      goods: offer[`goods`],
      host: {
        id: offer[`host`][`id`],
        name: offer[`host`][`name`],
        isPro: offer[`host`][`is_pro`],
        avatarUrl: offer[`host`][`avatar_url`],
      },
      description: offer[`description`],
      location: offer[`location`],
      id: offer[`id`],
    }
    rezultArray.push(newOffer);
  });
  return rezultArray;
};

const init = (appOffers, appSettings) => {
  const store = createStore(reducer);

  ReactDOM.render(<Provider store={store}>
    <App
      userName={appSettings.userName}
      data={appOffers}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init(rawDataConversion(offers), settings);


