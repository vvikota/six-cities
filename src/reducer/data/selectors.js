import NameSpace from "../name-spaces";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.DATA;

export const getData = (state) => {
  return state[NAME_SPACE].initialOffers;
};

export const getComments = (state) => {
  return state[NAME_SPACE].hotelComments;
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
      return rezultTwo === `noCurrentOffer` ?
        `noCurrentOffer` :
        rezultOne.filter((offer) => offer.id === rezultTwo)[0];
    }
);

export const getNearOffers = createSelector(
    getCityOffers,
    getCurrentOffer,
    (rezultOne, rezultTwo) => {
      if (rezultTwo !== `noCurrentOffer`) {
        return rezultOne.sort((a, b) => {
          return distanceBettweenPoints(a, rezultTwo)
                - distanceBettweenPoints(b, rezultTwo);
        }).slice(1, 4);
      } else {
        return `noNearOffers`;
      }
    }
);

function distanceBettweenPoints(point1, point2) {
  return Math.sqrt(
      Math.pow((point1.location.latitude - point2.location.latitude), 2)
    + Math.pow((point1.location.latitude - point2.location.longitude), 2));
}

