import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignIn from './sign-in.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Click on loginIn button, correctly works`, () => {
  const clickHandler = jest.fn();
  const logInScreen = shallow(<SignIn
    onSignInButtonClick={clickHandler}
    changeAuthorizationStatus={jest.fn()}
  />);

  const logInButton = logInScreen.find(`button`);

  logInButton.simulate(`click`, {preventDefault() {}});
  logInButton.simulate(`click`, {preventDefault() {}});
  logInButton.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(3);
});
