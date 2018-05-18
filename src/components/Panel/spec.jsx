import React from 'react';
import { shallow } from 'enzyme';
import Panel from './index';

test('components/Panel snapshot', () => {
  const wrapper = shallow(<Panel />);

  expect(wrapper).toMatchSnapshot();
});
