import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in.jsx';

it(`SignIn is correctly renderer`, ()=> {
  const tree = renderer.create(<SignIn
    onSignInButtonClick={jest.fn()}
    changeAuthorizationStatus={jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
