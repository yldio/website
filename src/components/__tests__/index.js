import React, { Fragment } from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
// import { shallow } from 'enzyme';

import Button from 'components/button';
import { H1, H2, H3, H4, H5, Copy } from 'components/typography';
import Checklist, { Item as CheckItem } from 'components/checklist';
import BulletList, { Item as BulletListItem } from 'components/bullet-list';
import Card, { CardsList } from 'components/card';
import Hero from 'components/hero';
import Section from 'components/section';
import Hr from 'components/hr';
import Video from 'components/video';
import theme from '../../theme';

jest.mock('gatsby-link');

test('snapshot components/bullet-list', () => {
  return expect(
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <Fragment>
            <BulletList first>
              <BulletListItem>Think differently</BulletListItem>
              <BulletListItem>Clients win</BulletListItem>
            </BulletList>
            <BulletList>
              <BulletListItem>Everyone sweeps the floor</BulletListItem>
              <BulletListItem>Good enough to be dangerous</BulletListItem>
              <BulletListItem>
                Ask for forgiveness, not permission
              </BulletListItem>
            </BulletList>
          </Fragment>
        </ThemeProvider>
      )
      .toJSON()
  ).toMatchSnapshot();
});

test('snapshot components/button', () => {
  return expect(
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <Fragment>
            <Button white to="/services">
              Services
            </Button>
            <Button transparent white to="https://jobs.lever.co/yld">
              View openings
            </Button>
            <Button
              to="/our-clients"
              background="slateblue"
              color="white"
              border="slateblue"
            >
              Meet Our Clients
            </Button>
          </Fragment>
        </ThemeProvider>
      )
      .toJSON()
  ).toMatchSnapshot();
});

test('snapshot components/card', () => {
  return expect(
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <Fragment>
            <CardsList>
              <Card
                id="card-one"
                title="card one title"
                points={['card one, point one', 'card one, point two']}
              />
              <Card
                id="card-two"
                title="card two title"
                points={['card two, point one', 'card two, point two']}
              />
              <Card
                id="card-three"
                title="card three title"
                points={['card three, point one', 'card three, point two']}
              />
            </CardsList>
          </Fragment>
        </ThemeProvider>
      )
      .toJSON()
  ).toMatchSnapshot();
});

test('snapshot components/checklist', () => {
  return expect(
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <Fragment>
            <Checklist>
              <CheckItem>check item one</CheckItem>
              <CheckItem>check item two</CheckItem>
              <CheckItem>check item three</CheckItem>
            </Checklist>
          </Fragment>
        </ThemeProvider>
      )
      .toJSON()
  ).toMatchSnapshot();
});

// test('snapshot components/hero', () => {
//   return expect(
//     renderer
//       .create(
//         <ThemeProvider theme={theme}>
//           <Fragment>
//             <Hero height="400" />
//             <Hero bg="img-path" />
//             <Hero />
//           </Fragment>
//         </ThemeProvider>
//       )
//       .toJSON()
//   ).toMatchSnapshot();
// });

test('snapshot components/hr', () => {
  return expect(
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <Hr />
        </ThemeProvider>
      )
      .toJSON()
  ).toMatchSnapshot();
});

test('snapshot components/section', () => {
  return expect(
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <Fragment>
            <Section blue />
            <Section dark />
            <Section />
          </Fragment>
        </ThemeProvider>
      )
      .toJSON()
  ).toMatchSnapshot();
});

test('snapshot components/typography', () => {
  return expect(
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <Fragment>
            <H1>H1</H1>
            <H1 white bold right>
              H1
            </H1>
            <H1 whiter bolder center>
              H1
            </H1>
            <H1 justify>H1</H1>
            <H2 white bold right>
              H2
            </H2>
            <H2>H2</H2>
            <H2 whiter bolder center>
              H2
            </H2>
            <H2 justify>H2</H2>
            <H3>H3</H3>
            <H3 white bold right decorated>
              H3
            </H3>
            <H3 whiter bolder center decorated>
              H3
            </H3>
            <H3 justify>H3</H3>
            <H4>H4</H4>
            <H4 white bold right decorated>
              H4
            </H4>
            <H4 whiter bolder center decorated>
              H4
            </H4>
            <H4 justify>H4</H4>
            <H5>H5</H5>
            <H5 white bold right decorated>
              H5
            </H5>
            <H5 whiter bolder center decorated>
              H5
            </H5>
            <H5 justify>H5</H5>
            <Copy>Copy</Copy>
            <Copy white bold right decorated>
              Copy
            </Copy>
            <Copy whiter bolder center decorated>
              Copy
            </Copy>
            <Copy justify>Copy</Copy>
          </Fragment>
        </ThemeProvider>
      )
      .toJSON()
  ).toMatchSnapshot();
});

test('snapshot components/video', () => {
  return expect(
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <Video />
        </ThemeProvider>
      )
      .toJSON()
  ).toMatchSnapshot();
});
