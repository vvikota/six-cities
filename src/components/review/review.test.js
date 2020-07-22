import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review.jsx';

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

it(`Review is correctly renderer`, ()=> {
  const tree = renderer.create(<Review
    hotelComments={hotelCommentsMock}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
