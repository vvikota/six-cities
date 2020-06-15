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

  ReactDOM.render(<Provider store={store}>
    <App
      userName={appSettings.userName}
      offers={appOffers}
      openCard={(offer) => {
        // eslint-disable-next-line no-console
        console.log(offer);
      }}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init(offers, settings);

