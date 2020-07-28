import React from 'react';
import renderer from 'react-test-renderer';
import ListOfReviews from './list-of-reviews.jsx';

const hotelCommentsMock = [
  {
    id: 1,
    user: {
      id: 1,
      isPro: true,
      name: `Alena`,
      avatarUrl: `url`,
    },
    rating: 10,
    comment: `text`,
    date: `april 2020`,
  }
];

it(`ListOfReviews is correctly renderer`, ()=> {
  const tree = renderer.create(<ListOfReviews
    hotelComments={hotelCommentsMock}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});

