import React from 'react';
import { shallow } from 'enzyme';
import Metrics from './index';

test('components/Logo snapshot', () => {
  const metrics = {
    sub: 'some text',
    main: 'some text here as well',
    content: [{ parameter: 'test', value: '20.00', change: '20%' }]
  };
  const wrapper = shallow(<Metrics {...metrics} />);

  expect(wrapper).toMatchSnapshot();
});
