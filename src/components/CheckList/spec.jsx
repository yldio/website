import React from 'react';
import { shallow } from 'enzyme';
import CheckList, { Item } from './index';

test('components/CheckList snapshot', () => {
  const wrapper = shallow(
    <CheckList>
      <Item>Hello, world</Item>
      <Item>I am another item</Item>
      <Item>And a third</Item>
    </CheckList>,
  );

  expect(wrapper).toMatchSnapshot();
});
