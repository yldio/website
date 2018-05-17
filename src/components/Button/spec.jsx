import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('components/Button', () => {
  const mockComponent = props => <div {...props} />;

  test('snapshot', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper).toMatchSnapshot();
  });

  test('custom component snapshot', () => {
    const wrapper = shallow(<Button component={mockComponent} />);
    expect(wrapper.text()).toContain('Styled(mockComponent)');
  });

  test('accepts a button or an anchor tag', () => {
    const anchor = shallow(<Button component="a" />);
    expect(anchor.text()).toContain('styled.a');

    const btn = shallow(<Button component="button" />);
    expect(btn.text()).toContain('styled.button');
  });
});
