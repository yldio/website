import React from 'react';
import { shallow } from 'enzyme';
import Link, { isInternal } from './index';

describe('components/Link', () => {
  test('internal link snapshot', () => {
    const wrapper = shallow(<Link href="/test">Test</Link>);

    expect(wrapper).toMatchSnapshot();
  });

  test('external link snapshot', () => {
    const wrapper = shallow(<Link href="https://test.com/">Test</Link>);

    expect(wrapper).toMatchSnapshot();
  });

  test('uses GatsbyLink for internal links', () => {
    const wrapper = shallow(<Link href="/internal">Internal</Link>);

    expect(wrapper.is('Styled(GatsbyLink)')).toBe(true);
  });

  test('uses anchor for external links', () => {
    const wrapper = shallow(<Link href="https://external.com/">External</Link>);

    expect(wrapper.text()).toContain('styled.a');
  });

  test('isInternal', () => {
    expect(isInternal('http://google.com')).toBe(false);
    expect(isInternal('//external')).toBe(false);
    expect(isInternal('/test')).toBe(true);
    expect(isInternal('/')).toBe(true);
  });
});
