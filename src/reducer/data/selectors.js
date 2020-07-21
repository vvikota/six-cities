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
      return rezultOne.filter((offer) => offer.id === rezultTwo)[0];
    }
);

export const getNearOffers = createSelector(
    getData,
    currentCity,
    getCurrentOffer,
    // eslint-disable-next-line consistent-return
    (rezultOne, rezultTwo, rezultThree) => {
      if (rezultTwo !== undefined) {
        const currentLatitude = rezultTwo.location.latitude;
        const currentLongitude = rezultTwo.location.longitude;
        // eslint-disable-next-line no-console
        // rezultOne.forEach((offer) => {
        //   return offer;
        //   // Math.sqrt(Math.pow((currentLatitude - offer.location.latitude), 2) + Math.pow((currentLongitude - offer.location.longitude), 2));
        //   // eslint-disable-next-line no-console
        //   // console.log(distance);
        // });
        // return currentLatitude;
        return rezultOne;
      }
    }
);

// d = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
// const distance = Math.sqrt(Math.pow((50.945361 - 52.36854), 2) + Math.pow((6.935974 - 4.887976), 2));
// console.log(distance);
