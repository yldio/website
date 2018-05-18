import React from 'react';
import { shallow } from 'enzyme';
import RecentBlogPosts from './index';

test('compositions/Home/Community/RecentBlogPosts snapshot', () => {
  const wrapper = shallow(<RecentBlogPosts />);

  expect(wrapper).toMatchSnapshot();
});
