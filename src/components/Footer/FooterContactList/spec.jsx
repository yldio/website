import React from 'react';
import { shallow } from 'enzyme';
import FooterContactList from './index';

test('components/FooterContactList snapshot', () => {
  const wrapper = shallow(<FooterContactList />);

  expect(wrapper).toMatchSnapshot();
});
