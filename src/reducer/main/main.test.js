import {reducer, ActionCreator} from "./main.js";

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Hawaii`)).toEqual({
      type: `CHANGE_CITY`,
      payload: `Hawaii`,
    });
  });

});

describe(`Reducer work correctly`, () => {
  it(`Reducer without parameters should return state without changes`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: `default`,
    });
  });

  it(`Should change city`, () => {
    expect(reducer({
      city: `default`,
    }, {
      type: `CHANGE_CITY`,
      payload: `Hawaii`
    })).toEqual({
      city: `Hawaii`,
    });
  });
});
