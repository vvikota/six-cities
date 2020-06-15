const initialState = {
  city: `Amsterdam`,
  offersList: [],
};

const ActionCreator = {
  cityChange: (city) => {
    return {
      type: `CITY_CHANGE`,
      payload: city,
    };
  }
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case `CITY_CHANGE` : return Object.assign({}, state, {
      city: action.payload,
    });

    case `GET_OFFERS_LIST` : return state.offersList;
  }

  return state;
};

export {
  reducer,
  ActionCreator
};
