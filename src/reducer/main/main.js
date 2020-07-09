
const initialState = {
  city: `default`,
};

const ActionCreator = {
  cityChange: (city) => ({
    type: `CITY_CHANGE`,
    payload: city,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case `CITY_CHANGE` : return Object.assign({}, state, {
      city: action.payload,
    });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
};
