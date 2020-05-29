import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card.jsx';

const mock = {
  premium: true,
  price: 120,
  image: `img/apartment-01.jpg`,
  rating: 3,
  placeType: `Apartment`,
  placeDiscription: `Wood and stone place`
};

it(`OfferCard is correcctly render`, ()=> {

  const tree = renderer.create(<OfferCard
    offer={mock}
    openCard={jest.fn()}
    onMouseEnter={jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
