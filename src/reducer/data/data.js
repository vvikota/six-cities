import rawDataConversion from "../../rawDataConversion.js";

const initialState = {
  initialOffers: [],
};

const ActionCreator = {

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
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case `LOAD_DATA`: return Object.assign({}, state, {
      initialOffers: action.payload,
    });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  Operation
};
