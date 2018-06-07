import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import Person from './index';

test('components/Person snapshot', () => {
  const wrapper = mount(
    <Person
      picture="/image.hs"
      name="Nuno Job"
      title="Founder + Director"
      twitter="https://twitter.com/dscape"
      linkedin="https://twitter.com/dscape"
    >
      Nuno is the founder and director at YLD. The previous CCO at Nodejitsu,
      Nuno was responsible for business development and sales in the world’s
      largest Node.js cloud. Now, he leads the YLD team and inspires all the
      creative minds that make up the company.
    </Person>,
  );
  expect(wrapper.find('styled__Img').prop('src')).toBe('/image.hs');
  expect(wrapper.find('styled__Title p').text()).toBe(' Founder + Director');

  expect(wrapper).toMatchSnapshot();
});
