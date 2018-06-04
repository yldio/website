import React from 'react';
import { shallow } from 'enzyme';

import Process from './index';

test('success section', () => {
  const props = {
    top: 'Process section top text',
    main: 'Process section main text',
    image: {
      childImageSharp: {
        src: 'process-image.jpg',
      },
    },
    imageAlt: 'A demo of the process',
  };

  const wrapper = shallow(<Process {...props} />);

  expect(wrapper).toMatchSnapshot();
});
