import NameSpace from "../name-spaces";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.DATA;

export const getData = (state) => {
  return state[NAME_SPACE].initialOffers;
};

export const getCities = createSelector(
    getData,
    (offers) => [...new Set(offers.map((offer) => offer.city.name))]
);

const currentCity = (state, city) => {
  return city;
};

export const getCityOffers = createSelector(
    getData,
    currentCity,
    (rezultOne, rezultTwo) => {
      return rezultOne.filter((offer) => offer.city.name === rezultTwo);
    }
);

export const getCurrentId = (state) => {
  return state[NAME_SPACE].currentOfferId;
};

export const getCurrentOffer = createSelector(
  getData,
  getCurrentId,
  (rezultOne, rezultTwo) => {
    // const preRezult = 
    return rezultOne.filter((offer) => offer.id === rezultTwo)[0];
  }
);