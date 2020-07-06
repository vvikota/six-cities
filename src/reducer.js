import offers from "./mocks/data.js";

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

  getOffersList: (placeOffers) => ({
    type: `GET_OFFERS_LIST`,
    payload: placeOffers,
  }),

  loadData: () => ({
    type: `LOAD_DATA`,
    payload: rawDataConversion(offers),
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case `CITY_CHANGE` : return Object.assign({}, state, {
      city: action.payload,
    });

    case `GET_OFFERS_LIST` : return Object.assign({}, state, {
      data: action.payload,
    });

    case `LOAD_DATA`: return Object.assign({}, state, {
      data: action.payload,
    });
  }

  return state;
};

export {
  reducer,
  ActionCreator
};
