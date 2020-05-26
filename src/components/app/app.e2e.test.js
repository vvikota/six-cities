import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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

Enzyme.configure({adapter: new Adapter()});

it(`Click on card-title, correctly works`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<App
    cardTitles={mock.cardTitles}
    userName={mock.userName}
    openCard={clickHandler}
  />);

  const openCardButtons = app.find(`.place-card__name-link`);
  const openCardButtonsCount = openCardButtons.length;
  openCardButtons.forEach((it) => it.simulate(`click`, {preventDefault() {}}));

  expect(clickHandler).toHaveBeenCalledTimes(openCardButtonsCount);
});
