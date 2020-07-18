import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withActiveItem from "./with-active-item.js";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should change hoverItemInfo after hover on CityList`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  wrapper.props().hoverItem(
      `Paris`
  );

  expect(wrapper.state().hoverItemInfo).toEqual(
      `Paris`
  );
});

it(`Should change hoverItemInfo after hover on PlacesList`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  wrapper.props().hoverItem({
    city: `Paris`,
    premium: true,
    cost: 250,
  });

  expect(wrapper.state().hoverItemInfo).toEqual({
    city: `Paris`,
    premium: true,
    cost: 250,
  });
});
