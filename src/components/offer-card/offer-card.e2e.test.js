import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card.jsx';

const mock = [
  {
    premium: true,
    price: 120,
    image: `img/apartment-01.jpg`,
    rating: 3,
    placeType: `Apartment`,
    placeDiscription: `Wood and stone place`
  },
  {
    premium: false,
    price: 220,
    image: `img/room.jpg`,
    rating: 2,
    placeType: `Apartment`,
    placeDiscription: `Beautiful luxurious apartment at great location`
  },
  {
    premium: false,
    price: 250,
    image: `img/apartment-02.jpg`,
    rating: 5,
    placeType: `Apartment`,
    placeDiscription: `Canal View Prinsengracht`
  },
  {
    premium: false,
    price: 150,
    image: `img/apartment-03.jpg`,
    rating: 1,
    placeType: `Apartment`,
    placeDiscription: `Nice, cozy, warm big bed apartment`
  },
  {
    premium: true,
    price: 50,
    image: `img/apartment-03.jpg`,
    rating: 2,
    placeType: `Private room`,
    placeDiscription: `Wood and stone place`
  },
];

Enzyme.configure({adapter: new Adapter()});

it(`Click on card-title, correctly works`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<OfferCard
    offers={mock}
    openCard={clickHandler}
  />);

  const openCardButtons = app.find(`.place-card__name-link`);
  const openCardButtonsCount = openCardButtons.length;
  openCardButtons.forEach((it) => it.simulate(`click`, {preventDefault() {}}));

  expect(clickHandler).toHaveBeenCalledTimes(openCardButtonsCount);
});
