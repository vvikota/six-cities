import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const mock = {
  userName: `vik792@gmail.com`,
};

it(`App is correcctly render`, ()=> {

  const tree = renderer.create(<App
    userName={mock.userName}
    offers={[]}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
