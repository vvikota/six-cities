
const rawDataConversion = (allOffers) => {
  let rezultArray = [];

  allOffers.map((offer) => {
    let newOffer = {
      city: offer[`city`],
      previewImage: offer[`preview_image`],
      images: offer[`images`],
      title: offer[`title`],
      isFavorite: offer[`is_favorite`],
      isPremium: offer[`is_premium`],
      rating: offer[`rating`],
      type: offer[`type`],
      bedrooms: offer[`bedrooms`],
      maxAdults: offer[`max_adults`],
      price: offer[`price`],
      goods: offer[`goods`],
      host: {
        id: offer[`host`][`id`],
        name: offer[`host`][`name`],
        isPro: offer[`host`][`is_pro`],
        avatarUrl: offer[`host`][`avatar_url`],
      },
      description: offer[`description`],
      location: offer[`location`],
      id: offer[`id`],
    };
    rezultArray.push(newOffer);
  });
  return rezultArray;
};

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
