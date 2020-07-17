import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withAuthorization from "./with-authorization.js";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withAuthorization(MockComponent);

const wrapper = shallow(<MockComponentWrapped
  onSignInButtonClick={jest.fn()}
/>);

describe(`withAuthorization. Should change local state after call onChange`, () => {
  it(`Should return default value`, () => {

    expect(wrapper.props().email).toEqual(`test@test.ru`);
    expect(wrapper.props().password).toEqual(`pass`);
  });

  it(`Should change email in local state after call onChange`, () => {
    wrapper.props().onChange({target: {
      name: `email`,
      value: `NEWemail@email.ru`,
    }});
    expect(wrapper.props().email).toEqual(`NEWemail@email.ru`);
    expect(wrapper.props().password).toEqual(`pass`);
  });

  it(`Should email and password in local state after call onChange`, () => {
    wrapper.props().onChange({target: {
      name: `email`,
      value: `email@email.ru`,
    }});
    wrapper.props().onChange({target: {
      name: `password`,
      value: `NEWpassword`,
    }});
    expect(wrapper.props().email).toEqual(`email@email.ru`);
    expect(wrapper.props().password).toEqual(`NEWpassword`);
  });
});

