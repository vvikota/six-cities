import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {compose} from "recompose";
import {BrowserRouter} from "react-router-dom";

import App from "./components/app/app.jsx";
import withRedux from "./hocs/with-redux/with-redux.js";
import reducer from "./reducer/index.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {Operation as UserOperation} from "./reducer/user/user.js";
import {configureAPI} from "./api";

const ReduxWrapper = withRedux(App);

const init = () => {
  const api = configureAPI();
  const composeEnhancers = (typeof window !== `undefined` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const store = createStore(
      reducer,
      composeEnhancers(applyMiddleware(thunk.withExtraArgument(api)))
  );

  store.dispatch(DataOperation.loadData());
  store.dispatch(UserOperation.checkAuthorization());

  ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <ReduxWrapper/>
        </BrowserRouter>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();


