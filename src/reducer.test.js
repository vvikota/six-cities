import {reducer, ActionCreator} from "./reducer.js";

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.cityChange(`Hawaii`)).toEqual({
      type: `CITY_CHANGE`,
      payload: `Hawaii`,
    });
  });

  it(`Action creator for add list offers returns correct action`, () => {
    expect(ActionCreator.getOffersList([{city: `London`}])).toEqual({
      type: `GET_OFFERS_LIST`,
      payload: [{city: `London`}],
    });
  });

});

describe(`Reducer work correctly`, () => {
  it(`Reducer without parameters should return state without changes`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: `default`,
      data: [],
    });
  });

  it(`Should change city`, () => {
    expect(reducer({
      city: `default`,
      data: [],
    }, {
      type: `CITY_CHANGE`,
      payload: `Hawaii`
    })).toEqual({
      city: `Hawaii`,
      data: [],
    });
  });

  it(`Should get data`, () => {
    expect(reducer({
      city: `default`,
      data: [],
    }, {
      type: `GET_OFFERS_LIST`,
      payload: [`offer`, `offer`, `offer`],
    })).toEqual({
      city: `default`,
      data: [`offer`, `offer`, `offer`],
    });
  });

});
