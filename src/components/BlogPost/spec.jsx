import React from 'react';
import { shallow } from 'enzyme';
import BlogPost from './index';

test('components/BlogPost snapshot', () => {
  const authors = [{ name: 'Nuno' }];

  const wrapper = shallow(
    <BlogPost
      title="New YLD Blog"
      content="Some markdown content..."
      authors={authors}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
