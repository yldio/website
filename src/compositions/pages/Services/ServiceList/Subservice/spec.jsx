import React from 'react';
import { shallow } from 'enzyme';
import Subservice from './index';

test('compositions/pages/Services/Subservice snapshot', () => {
  const wrapper = shallow(
    <Subservice name="Digital Transformation">Content</Subservice>,
  );

  expect(wrapper).toMatchSnapshot();
});
