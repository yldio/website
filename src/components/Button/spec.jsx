import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('components/Button', () => {
  const mockComponent = props => <div {...props} />;

  test('basic snapshot', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper).toMatchSnapshot();
  });

  test('custom component snapshot', () => {
    const custom = shallow(<Button component={mockComponent} />);
    expect(custom).toMatchSnapshot();
  });

  test('anchor snapshot', () => {
    const anchor = shallow(<Button component="a" />);
    expect(anchor).toMatchSnapshot();
  });

  test('button snapshot', () => {
    const button = shallow(<Button component="button" />);
    expect(button).toMatchSnapshot();
  });

  test('forwards props to component', () => {
    const props = { test: true };
    const wrapper = shallow(<Button component={mockComponent} {...props} />);

    expect(wrapper.props()).toEqual(props);
  });
});
