import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';

const mock = [
  {
    premium: true,
    price: 120,
    image: `img/apartment-01.jpg`,
    rating: 3,
    placeType: `Apartment`,
    placeDiscription: `Wood and stone place`,
    coord: [52.3909553943508, 4.85309666406198]
  },
  {
    premium: false,
    price: 220,
    image: `img/room.jpg`,
    rating: 2,
    placeType: `Apartment`,
    placeDiscription: `Beautiful luxurious apartment at great location`,
    coord: [52.369553943508, 4.85309666406198]
  },
  {
    premium: false,
    price: 250,
    image: `img/apartment-02.jpg`,
    rating: 5,
    placeType: `Apartment`,
    placeDiscription: `Canal View Prinsengracht`,
    coord: [52.3909553943508, 4.929309666406198]
  },
  {
    premium: false,
    price: 150,
    image: `img/apartment-03.jpg`,
    rating: 1,
    placeType: `Apartment`,
    placeDiscription: `Nice, cozy, warm big bed apartment`,
    coord: [52.3809553943508, 4.939309666406198]
  },
];

it(`Map is correctly renderer`, ()=> {
  const tree = renderer.create(<Map
    offers={mock}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
