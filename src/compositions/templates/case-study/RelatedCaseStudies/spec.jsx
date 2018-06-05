import React from 'react';
import { shallow } from 'enzyme';

import RelatedCaseStudies from './index';

test('RelatedCaseStudies', () => {
  const wrapper = shallow(<RelatedCaseStudies />);

  expect(wrapper).toMatchSnapshot();
});
