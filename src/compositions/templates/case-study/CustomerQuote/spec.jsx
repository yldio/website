import React from 'react';
import { shallow } from 'enzyme';

import CustomerQuote from './index';

test('CustomerQuote', () => {
  const props = {
    image: {
      childImageSharp: {
        src: 'image.jpg'
      }
    },
    imageAlt: 'Quote image',
    quote: 'YLD offered amazing service,',
    author: 'Casey Bisson',
    position: 'Senior Director of Product Management - Joyent',
    subDescription:
      'Some amazing support copy with go here to reenforce whatever section it is relevant too.',
    clientAppImage: {
      childImageSharp: {
        src: 'image.jpg'
      }
    },
    clientAppImageAlt: 'Client App Image'
  };
  const wrapper = shallow(<CustomerQuote {...props} />);

  expect(wrapper).toMatchSnapshot();
});
