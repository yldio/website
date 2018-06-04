import React from 'react';
import { shallow } from 'enzyme';

import CustomerQuote from './index';

test('CustomerQuote', () => {
  const props = {
    quotesImage: {
      childImageSharp: {
        src: 'image.jpg',
      },
    },
    quotesImageAlt: 'Quote image',
    quotes: 'YLD offered amazing service,',
    quoteAuthor: 'Casey Bisson',
    quotePosition: 'Senior Director of Product Management - Joyent',
    subDescription:
      'Some amazing support copy with go here to reenforce whatever section it is relevant too.',
    clientAppImage: {
      childImageSharp: {
        src: 'image.jpg',
      },
    },
    clientAppImageAlt: 'Client App Image',
  };
  const wrapper = shallow(<CustomerQuote {...props} />);

  expect(wrapper).toMatchSnapshot();
});
