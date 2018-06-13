import React from 'react';
import { shallow } from 'enzyme';
import Metric from './index';

test('components/Logo snapshot', () => {
  const wrapper = shallow(
    <Metric parameter="reviews" value="2.8" change="20%" />
  );

  expect(wrapper).toMatchSnapshot();
});
