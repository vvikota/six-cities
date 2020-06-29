const initialState = {
  city: `Amsterdam`,
  // offersCityList: [],
};

const ActionCreator = {
  cityChange: (city) => ({
    type: `CITY_CHANGE`,
    payload: city,
  }),

  // getOffersCityList: (placeOffers) => {

  //   return {
  //     type: `GET_OFFERS_CITY_LIST`,
  //     payload: placeOffers,
  //   }
  // }
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case `CITY_CHANGE` : return Object.assign({}, state, {
      city: action.payload,
    });

    // case `GET_OFFERS_CITY_LIST` : return Object.assign({}, state, {
    //   offersCityList: action.payload,
    // });
  }

  return state;
};

export {
  reducer,
  ActionCreator
};
