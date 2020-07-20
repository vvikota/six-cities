import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.jsx';
import {MemoryRouter} from "react-router-dom";

it(`Header is correctly renderer`, ()=> {
  const tree = renderer.create(<MemoryRouter><Header
    userInformation={`userInformation`}
    isAuthorizationRequired={true}
  /></MemoryRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
