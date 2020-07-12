const initialState = {
  isAuthorizationRequired: true,
  email: undefined,
  password: undefined,
  serverResponse: undefined,
};

const ActionCreator = {
  requiredAuthorization: (status) => ({
    type: `REQUIRED_AUTHORIZATION`,
    payload: status,
  }),

  saveServerResponse: (serverResponse) => {
    // eslint-disable-next-line no-console
    // console.log(serverResponse);
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
      dispatch(ActionCreator.saveServerResponse(response.data));
      // history.pushState(null, null, `/win`);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err.response.data.error);
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case `REQUIRED_AUTHORIZATION` : return Object.assign({}, state, {
      isAuthorizationRequired: false,
      email: action.payload.email,
      password: action.payload.password,
    });

    case `SAVE_SERVER_RESPONSE` : return Object.assign({}, state, {
      serverResponse: action.payload,
    });
  }
  return state;
};

export {
  reducer,
  ActionCreator,
  Operation,
};
