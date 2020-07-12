import {reducer, Operation} from "./user.js";
import MockAdapter from "axios-mock-adapter";
import {configureAPI} from "../../api";

describe(`Reducer work correctly`, () => {
  it(`Reducer without parameters should return state without changes`, () => {
    expect(reducer(undefined, {})).toEqual({
      isAuthorizationRequired: false,
      email: undefined,
      password: undefined,
      serverResponse: `noAuthorized`,
    });
  });

  it(`Should save server response`, () => {
    expect(reducer({
      isAuthorizationRequired: false,
      email: undefined,
      password: undefined,
      serverResponse: `noAuthorized`,
    }, {
      type: `SAVE_SERVER_RESPONSE`,
      payload: {id: 1, name: `Vi`, avatar: `url`},
    })).toEqual({
      isAuthorizationRequired: false,
      email: undefined,
      password: undefined,
      serverResponse: {id: 1, name: `Vi`, avatar: `url`},
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
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `REQUIRED_AUTHORIZATION`,
          payload: rawServerData,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: `CHANGE_AUTHORIZATION_STATUS`,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: `SAVE_SERVER_RESPONSE`,
          payload: goodData,
        });
      });
  });

});
