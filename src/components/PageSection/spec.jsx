import React from 'react';
import { shallow } from 'enzyme';
import Gradient from 'components/Gradient';
import PageSection from './index';

test('snapshot', () => {
  const wrapper = shallow(<PageSection />);

  expect(wrapper).toMatchSnapshot();
});

test('snapshot with gradient', () => {
  const wrapper = shallow(<PageSection gradient>Content</PageSection>);

  expect(wrapper).toMatchSnapshot();
});

test('renders a gradient when provided', () => {
  const wrapper = shallow(
    <PageSection gradient>
      <div>Content</div>
    </PageSection>,
  );

  const gradient = wrapper
    .find('Container')
    .children()
    .last();

  expect(gradient.is(Gradient)).toBe(true);
});
