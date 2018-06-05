import React from 'react';
import { shallow } from 'enzyme';
import Metrics from './index';

test('components/Logo snapshot', () => {
  const wrapper = shallow(
    <Metrics parameter="reviews" value="2.8" change="20%" />,
  );

  expect(wrapper).toMatchSnapshot();
});
