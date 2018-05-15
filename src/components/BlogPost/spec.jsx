import React from 'react';
import { shallow } from 'enzyme';
import BlogPost from './index';

test('components/BlogPost snapshot', () => {
  const wrapper = shallow(
    <BlogPost
      title={{ title: 'New YLD Blog' }}
      body={{ body: 'Some markdown content...' }}
      author={{ name: 'Nuno' }}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
