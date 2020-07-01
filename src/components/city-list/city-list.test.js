import React from 'react';
import renderer from 'react-test-renderer';
import CityList from './city-list.jsx';

it(`CityList is correctly renderer`, ()=> {
  const tree = renderer.create(<CityList
    data={[]}
    currentCity={`London`}
    chooseCity={jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
