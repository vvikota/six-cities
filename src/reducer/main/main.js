const initialState = {
  city: `default`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case `CHANGE_CITY` : return Object.assign({}, state, {
      city: action.payload,
    });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
};
