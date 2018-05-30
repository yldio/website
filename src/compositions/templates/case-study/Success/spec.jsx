import React from 'react';
import { shallow } from 'enzyme';

import Success from './index';

test('success section', () => {
  const wrapper = shallow(
    <Success
      success={{
        main: 'this is the main description',
        sub: 'this is the sub description',
      }}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
