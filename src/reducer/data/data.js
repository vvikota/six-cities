import rawDataConversion from "./rawDataConversion.js";

const initialState = {
  initialOffers: [],
  currentOfferId: `noCurrentOffer`,
  hotelComments: [],
};

const ActionType = {
  LOAD_DATA: `LOAD_DATA`,
  CHANGE_ID: `CHANGE_ID`,
};

const ActionCreator = {
  loadData: (offers) => ({
    type: ActionType.LOAD_DATA,
    payload: offers,
  }),

  changeCurrentId: (currentId) => ({
    type: ActionType.CHANGE_ID,
    payload: currentId,
  }),

  loadCommentsData: (serverResponse) => ({
    type: ActionType.LOAD_COMMENTS_DATA,
    payload: serverResponse,
  })
};

const Operation = {
  loadData: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadData(rawDataConversion(response.data)));
      });
  },

  loadCommentsData: (hotelId) => (dispatch, _getState, api) => {
    return api.get(`/` + hotelId)
      .then((response) => {
        dispatch(ActionCreator.loadCommentsData(commentsDataConversion(response.data)));
      });
  }

};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.LOAD_DATA: return Object.assign({}, state, {
      initialOffers: action.payload,
    });

    case ActionType.CHANGE_ID: return Object.assign({}, state, {
      currentOfferId: action.payload,
    });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  Operation
};
