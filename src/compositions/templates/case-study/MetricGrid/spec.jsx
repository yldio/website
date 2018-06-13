import React from 'react';
import { shallow } from 'enzyme';
import MetricGrid from './index';

test('components/Logo snapshot', () => {
  const content = [
    {
      parameter: 'reviews',
      value: '2.8',
      change: '20%'
    },
    {
      parameter: 'reviews',
      value: '2.8',
      change: '20%'
    }
  ];
  const wrapper = shallow(<MetricGrid content={content} />);

  expect(wrapper).toMatchSnapshot();
});
