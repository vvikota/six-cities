import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in.jsx';
import {MemoryRouter} from "react-router-dom";

it(`SignIn is correctly renderer`, ()=> {
  const tree = renderer.create(<MemoryRouter><SignIn
    onSignInButtonClick={jest.fn()}
    changeAuthorizationStatus={jest.fn()}
  /></MemoryRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
