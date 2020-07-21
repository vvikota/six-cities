import rawDataConversion from "./rawDataConversion.js";
import commentsDataConversion from "./commentsDataConversion.js";

const initialState = {
  initialOffers: [],
  currentOfferId: `noCurrentOffer`,
  hotelComments: [{
    id: 0,
    user: {
      id: 0,
      isPro: false,
      name: `string`,
      avatarUrl: `string`,
    },
    rating: 0,
    comment: `string`,
    date: `string`,
  }],
};

const ActionType = {
  LOAD_DATA: `LOAD_DATA`,
  CHANGE_ID: `CHANGE_ID`,
  SAVE_HOTEL_COMMENTS: `SAVE_HOTEL_COMMENTS`,
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

  saveHotelComments: (serverResponse) => ({
    type: ActionType.SAVE_HOTEL_COMMENTS,
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

  openDetailOffer: (hotelId) => (dispatch, _getState, api) => {
    dispatch(ActionCreator.changeCurrentId(hotelId));
    return api.get(`/comments/` + hotelId)
      .then((response) => {
        dispatch(ActionCreator.saveHotelComments(commentsDataConversion(response.data)));
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

    case ActionType.SAVE_HOTEL_COMMENTS: return Object.assign({}, state, {
      hotelComments: action.payload,
    });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  Operation
};
