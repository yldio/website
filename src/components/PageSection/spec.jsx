import React from 'react';
import { shallow } from 'enzyme';
import PageSection from './index';

test('snapshot', () => {
  const wrapper = shallow(<PageSection />);

  expect(wrapper).toMatchSnapshot();
});

test('snapshot with gradient', () => {
  const wrapper = shallow(<PageSection gradient>Content</PageSection>);

  expect(wrapper).toMatchSnapshot();
});
