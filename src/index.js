import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {compose} from "recompose";

import App from "./components/app/app.jsx";
import settings from "./mocks/settings.js";
import {reducer, Operation} from "./reducer.js";
import {configureAPI} from "./api";


const init = () => {
  const api = configureAPI((...args) => store.dispatch(...args));
  const {userName} = settings;

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(
      applyMiddleware(thunk.withExtraArgument(api))
  );

  const store = createStore(reducer, enhancer);

  store.dispatch(Operation.loadData());

  ReactDOM.render(
      <Provider store={store}>
        <App
          userName={userName}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();


