import React from 'react';
import { shallow } from 'enzyme';
import TagList from './index';

test('snapshot', () => {
  const wrapper = shallow(
    <TagList tags={['engineering', 'devops', 'backend']} />,
  );

  expect(wrapper).toMatchSnapshot();
});
