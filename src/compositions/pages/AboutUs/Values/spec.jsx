import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Values, { Value } from './index';

test('components/Values snapshot', () => {
  const wrapper = shallow(<Values />);

  expect(wrapper).toMatchSnapshot();
});

test('components/Value snapshot', () => {
  const wrapper = shallow(
    <Value header="Your opportunity is limitless">
      You are the driver of change. We never give up, we begin again. Be
      adventuruous. Push the boundaries. Go the extra mile.
    </Value>,
  );

  expect(wrapper.find('styled__Header').html()).toBe(
    '<div class="styled__Header-ctRlcN fOoAaV">Your opportunity is limitless</div>',
  );

  expect(wrapper).toMatchSnapshot();
});
