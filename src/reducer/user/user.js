import rawDataConversion from "./rawDataConversion.js";

const initialState = {
  isAuthorizationRequired: true,
  authorizationData: {
    id: 0,
    email: ``,
    name: ``,
    avatarUrl: ``,
    isPro: false,
  },
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
  },
};

const Operation = {
  checkAuthorization: () => (dispatch, _getState, api) => {
    return api.get(`/login`)
    .then((response) => {
      // eslint-disable-next-line no-console
      // console.log(response.data);
      if (response.status !== 403) {
        dispatch(ActionCreator.saveServerResponse(rawDataConversion(response.data)));
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
      // eslint-disable-next-line no-console
      // console.log(response.status);
      if (response.status !== 400) {
        dispatch(ActionCreator.saveServerResponse(rawDataConversion(response.data)));
      }
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
