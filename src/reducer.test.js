import {reducer, ActionCreator, Operation} from "./reducer.js";
import MockAdapter from "axios-mock-adapter";
import {configureAPI} from "./api";

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.cityChange(`Hawaii`)).toEqual({
      type: `CITY_CHANGE`,
      payload: `Hawaii`,
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
      type: `LOAD_DATA`,
      payload: [`offer`, `offer`, `offer`],
    })).toEqual({
      city: `default`,
      data: [`offer`, `offer`, `offer`],
    });
  });

  it(`Should make a correct API call to /hotels`, function () {
    const rawServerData = {
      "city": {
        "name": `Cologne`,
        "location": {
          "latitude": 50.938361,
          "longitude": 6.959974,
          "zoom": 13
        }
      },
      "preview_image": `https://es31-server.appspot.com/six-cities/static/hotel/13.jpg`,
      "images": [`https://es31-server.appspot.com/six-cities/static/hotel/11.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/9.jpg`],
      "title": `Loft Studio in the Central Area`,
      "is_favorite": false,
      "is_premium": false,
      "rating": 3.4,
      "type": `house`,
      "bedrooms": 2,
      "max_adults": 3,
      "price": 216,
      "goods": [`Coffee machine`, `Breakfast`],
      "host": {
        "id": 25,
        "name": `Angelina`,
        "is_pro": true,
        "avatar_url": `img/avatar-angelina.jpg`
      },
      "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
      "location": {
        "latitude": 50.947361,
        "longitude": 6.9799739999999995,
        "zoom": 16
      },
      "id": 5
    };

    const goodData = {
      "city": {
        "name": `Cologne`,
        "location": {
          "latitude": 50.938361,
          "longitude": 6.959974,
          "zoom": 13
        }
      },
      "previewImage": `https://es31-server.appspot.com/six-cities/static/hotel/13.jpg`,
      "images": [`https://es31-server.appspot.com/six-cities/static/hotel/11.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/9.jpg`],
      "title": `Loft Studio in the Central Area`,
      "isFavorite": false,
      "isPremium": false,
      "rating": 3.4,
      "type": `house`,
      "bedrooms": 2,
      "maxAdults": 3,
      "price": 216,
      "goods": [`Coffee machine`, `Breakfast`],
      "host": {
        "id": 25,
        "name": `Angelina`,
        "isPro": true,
        "avatarUrl": `img/avatar-angelina.jpg`
      },
      "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
      "location": {
        "latitude": 50.947361,
        "longitude": 6.9799739999999995,
        "zoom": 16
      },
      "id": 5
    };

    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const dataLoader = Operation.loadData();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [rawServerData]);

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_DATA`,
          payload: [goodData],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: `CITY_CHANGE`,
          payload: `Cologne`,
        });
      });
  });

});
