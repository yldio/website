import React from 'react';
import { shallow } from 'enzyme';
import UpcomingEvents from './index';

test('compositions/Home/Community/UpcomingEvents snapshot', () => {
  const wrapper = shallow(<UpcomingEvents />);

  expect(wrapper).toMatchSnapshot();
});
