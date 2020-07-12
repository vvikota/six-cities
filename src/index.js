import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {compose} from "recompose";

import App from "./components/app/app.jsx";
import settings from "./mocks/settings.js";
import reducer from "./reducer/index.js";
import {Operation} from "./reducer/data/data.js";
import {configureAPI} from "./api";


const init = () => {
  const {userName} = settings;
  const api = configureAPI((...args) => store.dispatch(...args));

  const composeEnhancers = (typeof window !== `undefined` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
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


