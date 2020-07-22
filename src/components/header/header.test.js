import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.jsx';
import {MemoryRouter} from "react-router-dom";

const userInformationMock = {
  id: 1,
  email: `email`,
  name: `name`,
  avatarUrl: `url`,
  isPro: true,
};

it(`Header is correctly renderer`, ()=> {
  const tree = renderer.create(<MemoryRouter><Header
    userInformation={userInformationMock}
    isAuthorizationRequired={true}
  /></MemoryRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
