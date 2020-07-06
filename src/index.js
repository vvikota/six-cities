import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";
import settings from "./mocks/settings.js";
import {reducer, ActionCreator} from "./reducer.js";

const init = (appSettings) => {
  const store = createStore(reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  store.dispatch(ActionCreator.loadData());

  ReactDOM.render(
      <Provider store={store}>
        <App
          userName={appSettings.userName}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(settings);


