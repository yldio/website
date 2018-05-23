import React from 'react';
import { shallow } from 'enzyme';
import styled from 'styled-components';
import PageHero from './index';

describe('components/PageHero', () => {
  test('basic snapshot', () => {
    const wrapper = shallow(
      <PageHero title="Hello, world!">I am the page hero body</PageHero>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('renders children', () => {
    const children = 'I am the page hero body';

    const wrapper = shallow(
      <PageHero title="Hello, world!">{children}</PageHero>,
    );

    expect(
      wrapper
        .children()
        .find('styled(main)')
        .dive()
        .text(),
    ).toEqual(children);
  });

  test('renders DefaultTitle if only a string is provided as title', () => {});

  test('renders title as a component if it is not a string', () => {});
});
