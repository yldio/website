import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe('components/Card', () => {
  test('basic snapshot', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toMatchSnapshot();
  });
});
