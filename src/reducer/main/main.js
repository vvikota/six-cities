const initialState = {
  city: `default`,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_CITY : return Object.assign({}, state, {
      city: action.payload,
    });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
};
