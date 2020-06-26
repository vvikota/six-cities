import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";
import settings from "./mocks/settings.js";
import {reducer} from "./reducer.js";

const init = (appOffers, appSettings) => {
  const store = createStore(reducer);
  // const placeOffers = Object.values(appOffers[0])[0];

  ReactDOM.render(<Provider store={store}>
    <App
      userName={appSettings.userName}
      offers={appOffers}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init(offers, settings);

