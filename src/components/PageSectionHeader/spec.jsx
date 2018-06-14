import React from 'react';
import { shallow } from 'enzyme';
import PageSection from './index';

test('components/PageSection snapshot', () => {
  const wrapper = shallow(<PageSection title="Hello, world!" />);

  expect(wrapper).toMatchSnapshot();
});

test('components/PageSection snapshot with description', () => {
  const wrapper = shallow(
    <PageSection
      title="Hello, world!"
      description="This is some support copy"
    />
  );

  expect(wrapper).toMatchSnapshot();
});
