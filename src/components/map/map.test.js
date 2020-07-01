import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';

it(`Map is correctly renderer`, ()=> {
  const tree = renderer.create(<Map
    data={[]}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
