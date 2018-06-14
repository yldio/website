import React from 'react';
import { shallow } from 'enzyme';
import PageHero from './index';

describe('components/PageHero', () => {
  test('basic snapshot', () => {
    const wrapper = shallow(
      <PageHero title="Hello, world!">I am the page hero body</PageHero>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('renders children', () => {
    const children = 'I am the page hero body';

    const wrapper = shallow(
      <PageHero title="Hello, world!">{children}</PageHero>
    );

    expect(
      wrapper
        .children()
        .find('styled__Main')
        .children()
        .text()
    ).toEqual(children);
  });

  test('renders DefaultTitle if only a string is provided as title', () => {
    const wrapper = shallow(<PageHero title="Hello, world!" />);

    expect(wrapper.find('styled__Header').contains('Hello, world!')).toBe(true);
  });

  test('renders title as a component if it is not a string', () => {
    const title = <div>Hello, world</div>;
    const wrapper = shallow(<PageHero title={title} />);

    expect(wrapper.find('styled__Header').contains(title)).toBe(true);
  });
});
