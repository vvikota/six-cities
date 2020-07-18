import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in.jsx';
import {MemoryRouter} from "react-router-dom";

it(`SignIn is correctly renderer`, ()=> {
  const tree = renderer.create(<MemoryRouter><SignIn
    logIn={jest.fn()}
    onChange={jest.fn()}
    password={`test`}
    email={`test@test.ru`}
  /></MemoryRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
