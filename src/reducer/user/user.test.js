import {reducer, Operation} from "./user.js";
import MockAdapter from "axios-mock-adapter";
import {configureAPI} from "../../api";

describe(`Reducer work correctly`, () => {
  it(`Reducer without parameters should return state without changes`, () => {
    expect(reducer(undefined, {})).toEqual({
      isAuthorizationRequired: true,
      authorizationData: {
        id: 0,
        email: ``,
        name: ``,
        avatarUrl: ``,
        isPro: false,
      },
    });
  });

  it(`Should save server response`, () => {
    expect(reducer({
      isAuthorizationRequired: true,
      authorizationData: `noAuthorized`,
    }, {
      type: `SAVE_SERVER_RESPONSE`,
      payload: {
        id: 10,
        email: `email`,
        name: `Alena`,
        avatarUrl: `url`,
        isPro: true,
      },
    })).toEqual({
      isAuthorizationRequired: false,
      authorizationData: {
        id: 10,
        email: `email`,
        name: `Alena`,
        avatarUrl: `url`,
        isPro: true,
      },
    });
  });

  it(`Should make a correct API call to /login`, function () {
    const rawServerData = {
      "id": 1,
      "email": `test@test.ru`,
      "name": `test`,
      "avatar_url": `/static/avatar/1.jpg`,
      "is_pro": false
    };

    const goodData = {
      "id": 1,
      "email": `test@test.ru`,
      "name": `test`,
      "avatarUrl": `/static/avatar/1.jpg`,
      "isPro": false
    };

    const userInfo = {
      email: `test@test.ru`,
      password: 12345,
    };

    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const authorizationRequest = Operation.requiredAuthorization(userInfo);

    apiMock
      .onPost(`/login`, userInfo)
      .reply(200, rawServerData);

    return authorizationRequest(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: `SAVE_SERVER_RESPONSE`,
          payload: goodData,
        });
      });
  });

});
