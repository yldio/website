import React from 'react';
import { shallow, mount } from 'enzyme';
import Post from './index';

jest.mock('gatsby-link');

describe('components/Post', () => {
  const defaultProps = {
    children: `I think its one of the simplest yet most powerful extensions inVision
    hasn't launched. As animation and transition in inVision evolve it
    should grow even more powerful`,
    date: '2018-05-18T14:38:23.996+01:00',
    image: 'https://placekitten.com/128/128',
    sourceLink: '/people/nuno-job',
    sourceText: 'Nuno Job',
    title: 'We’re Hiring! YLD on the look out for Front-End Devs and DevOps.',
  };

  test('snapshot', () => {
    const wrapper = shallow(<Post {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('date formatting', () => {
    const props = { ...defaultProps, date: '2018-05-18T14:38:23.996+01:00' };
    const wrapper = mount(<Post {...props} />);

    expect(wrapper.find('time').text()).toEqual('May 18');
  });
});
