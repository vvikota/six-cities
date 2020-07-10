import NameSpace from "../name-spaces";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.DATA;

export const getData = (state) => {
  return state[NAME_SPACE].initialOffers;
};

export const getCities = createSelector(
    getData,
    (offers) => {
      const cityArray = [];

      offers.forEach((offer) => {
        if (cityArray.indexOf(offer.city.name) < 0) {
          cityArray.push(offer.city.name);
        }
      });
      return cityArray;
    }
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
