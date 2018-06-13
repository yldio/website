import React from 'react';
import { shallow } from 'enzyme';

import TileGrid, { Tile } from 'components/TileGrid';
import RelatedCaseStudies from './index';

const props = {
  caseStudies: [
    {
      client: 'Joyent',
      clientLogo: {
        childImageSharp: {
          src: 'joyent-logo.png'
        }
      },
      description:
        'A legacy platform that faced a huge pressure to have an updated interface.',
      clientAppImage: {
        childImageSharp: {
          src: 'joyent-app.png'
        }
      }
    },
    {
      client: 'Trainline',
      clientLogo: {
        childImageSharp: {
          src: 'trainline-logo.png'
        }
      },
      description:
        'A legacy platform that faced a huge pressure to have an updated interface.',
      clientAppImage: {
        childImageSharp: {
          src: 'trainline-app.png'
        }
      }
    }
  ]
};

test('RelatedCaseStudies', () => {
  const wrapper = shallow(<RelatedCaseStudies {...props} />);

  expect(wrapper).toMatchSnapshot();
});

test('RelatedCaseStudies renders the second case study as a green tile', () => {
  const wrapper = shallow(<RelatedCaseStudies {...props} />);

  const tile = wrapper
    .find(TileGrid)
    .find(Tile)
    .at(1);

  expect(tile.prop('colour')).toBe('lightGreen');
});
