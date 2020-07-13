import rawDataConversion from "./rawDataConversion.js";

const initialState = {
  isAuthorizationRequired: false,
  email: undefined,
  password: undefined,
  serverResponse: `noAuthorized`,
};

const ActionCreator = {
  requiredAuthorization: (authorizationData) => {
    return {
      type: `REQUIRED_AUTHORIZATION`,
      payload: authorizationData,
    };
  },

  changeAuthorizationStatus: (status) => {
    return {
      type: `CHANGE_AUTHORIZATION_STATUS`,
      payload: status,
    };
  },

  saveServerResponse: (serverResponse) => {
    return {
      type: `SAVE_SERVER_RESPONSE`,
      payload: serverResponse,
    };
  }
};

const Operation = {
  requiredAuthorization: (data) => (dispatch, _getState, api) => {
    return api.post(`/login`, data)
    .then((response) => {
      dispatch(ActionCreator.requiredAuthorization(response.data));
      // dispatch(ActionCreator.changeAuthorizationStatus(false));
      dispatch(ActionCreator.saveServerResponse(rawDataConversion(response.data)));
      // history.pushState(null, null, `/`);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case `REQUIRED_AUTHORIZATION` : return Object.assign({}, state, {
      email: action.payload.email,
      password: action.payload.password,
    });

    case `SAVE_SERVER_RESPONSE` : return Object.assign({}, state, {
      serverResponse: action.payload,
    });

    case `CHANGE_AUTHORIZATION_STATUS` : return Object.assign({}, state, {
      isAuthorizationRequired: action.payload,
    });
  }
  return state;
};

export {
  reducer,
  ActionCreator,
  Operation,
};
