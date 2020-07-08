import rawDataConversion from "./rawDataConversion.js";

const initialState = {
  city: `default`,
  data: [],
};

const ActionCreator = {
  cityChange: (city) => ({
    type: `CITY_CHANGE`,
    payload: city,
  }),

  loadData: (offers) => ({
    type: `LOAD_DATA`,
    payload: offers,
  }),
};

const Operation = {
  loadData: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadData(rawDataConversion(response.data)));
        dispatch(ActionCreator.cityChange(response.data[0].city.name));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case `CITY_CHANGE` : return Object.assign({}, state, {
      city: action.payload,
    });

    case `LOAD_DATA`: return Object.assign({}, state, {
      data: action.payload,
    });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  Operation
};
