import React from 'react';
import { shallow } from 'enzyme';

import Process from './index';

test('success section', () => {
  const wrapper = shallow(
    <Process top="Process section top text" main="Process section main text" />,
  );

  expect(wrapper).toMatchSnapshot();
});
