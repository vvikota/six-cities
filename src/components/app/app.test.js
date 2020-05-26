import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const mock = {
  cardTitles: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`
  ],
  userName: `vik792@gmail.com`,
};

it(`App is correcctly render`, ()=> {

  const tree = renderer.create(<App
    cardTitles={mock.cardTitles}
    userName={mock.userName}
    openCard={jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
