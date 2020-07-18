import rawDataConversion from "./rawDataConversion.js";

const initialState = {
  isAuthorizationRequired: true,
  authorizationData: `noAuthorized`,
};

const ActionType = {
  SAVE_SERVER_RESPONSE: `SAVE_SERVER_RESPONSE`,
};

const ActionCreator = {

  saveServerResponse: (serverResponse) => {
    return {
      type: ActionType.SAVE_SERVER_RESPONSE,
      payload: serverResponse,
    };
  }
};

const Operation = {
  checkAuthorization: () => (dispatch, _getState, api) => {
    return api.get(`/login`)
    .then((response) => {
      if (response.object.status !== 403) {
        dispatch(ActionCreator.saveServerResponse(response.data));
      }
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.log(`not authorized!!!`);
    });
  },

  requiredAuthorization: (data) => (dispatch, _getState, api) => {
    return api.post(`/login`, data)
    .then((response) => {
      dispatch(ActionCreator.saveServerResponse(rawDataConversion(response.data)));
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.log(`error`);
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.SAVE_SERVER_RESPONSE : return Object.assign({}, state, {
      isAuthorizationRequired: false,
      authorizationData: action.payload,
    });
  }
  return state;
};

export {
  reducer,
  ActionCreator,
  Operation,
};
