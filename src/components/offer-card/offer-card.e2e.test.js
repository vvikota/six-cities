import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card.jsx';

const mock = {
  premium: true,
  price: 120,
  image: `img/apartment-01.jpg`,
  rating: 3,
  placeType: `Apartment`,
  placeDiscription: `Wood and stone place`
};

Enzyme.configure({adapter: new Adapter()});

it(`Click on card-image, correctly works`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<OfferCard
    offer={mock}
    openCard={clickHandler}
    onMouseEnter={jest.fn()}
  />);

  const imageLink = app.find(`.image-link`);
  imageLink.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
