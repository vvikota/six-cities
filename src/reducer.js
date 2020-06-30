const initialState = {
  city: `default`,
  data: [],
};

const ActionCreator = {
  cityChange: (city) => ({
    type: `CITY_CHANGE`,
    payload: city,
  }),

  getOffersList: (placeOffers) => ({
    type: `GET_OFFERS_LIST`,
    payload: placeOffers,
  }),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case `CITY_CHANGE` : return Object.assign({}, state, {
      city: action.payload,
    });

    case `GET_OFFERS_LIST` : return Object.assign({}, state, {
      data: action.payload,
    });
  }

  return state;
};

export {
  reducer,
  ActionCreator
};
