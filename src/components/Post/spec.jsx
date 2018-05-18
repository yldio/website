import React from 'react';
import { shallow } from 'enzyme';
import Post from './index';

test('components/Post snapshot', () => {
  const wrapper = shallow(<Post />);

  expect(wrapper).toMatchSnapshot();
});
