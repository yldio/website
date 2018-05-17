import React from 'react';
import { shallow } from 'enzyme';
import PageSection from './index';

test('components/PageSection snapshot', () => {
  const wrapper = shallow(<PageSection />);

  expect(wrapper).toMatchSnapshot();
});
