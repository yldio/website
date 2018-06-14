import Container from 'components/Container';
import { spacing } from 'styles/spacing';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import remcalc from 'remcalc';
import { pink } from 'styles/colours';
import PageSection from '../PageSection';
// import breakpoints from 'styles/breakpoints';

const Headline = styled.div`
  height: ${remcalc(470)};
  background-color: ${props => props.headlineBgColour};
  color: ${props => props.headlineTextColour};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${remcalc(80)} 0;

  & > * {
    width: 50%;
  }
`;

const Item = styled.li`
  display: list-item;
  list-style: disc outside none;
`;

const Span = styled.span`
  color: #433a4f;
`;

const UL = styled.ul`
  color: ${pink};
  padding-right: 25px;
`;

const Column = styled.div`
  position: relative;

  @media (max-width: 550px) {
    width: 100%;
  }
  min-width: 225px;
`;

const Subtitle = styled.div`
  font-size: ${remcalc(18)};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.78;
  letter-spacing: 0.3px;
  color: #5e5cb2;
`;

const H1 = styled.h1`
  font-size: ${remcalc(72)};
  margin-top: ${spacing(3)};
  margin-bottom: ${spacing(3)};
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;

const CaseStudyItem = ({
  name,
  objective,
  imagePath,
  imageAlt,
  headlineBgColour,
  headlineTextColour,
  tagline,
  challenges,
  results,
  video,
  videoPath,
}) => (
  <Fragment>
    <Container>
      <Headline
        headlineBgColour={headlineBgColour}
        headlineTextColour={headlineTextColour}
      >
        <Row>
          <Column>
            <PageSection>
              <H1>{name}</H1>
              {objective}
            </PageSection>
          </Column>
          <Column>
            <img src={imagePath} alt={imageAlt} />
          </Column>
        </Row>
      </Headline>
    </Container>

    <PageSection>
      {tagline}
      <Row>
        <Column>
          <Subtitle>CHALLENGES</Subtitle>
          <UL>
            {challenges.map(challenge => (
              <Item>
                <Span>{challenge}</Span>
              </Item>
            ))}
          </UL>
        </Column>
        <Column>
          <Subtitle>RESULTS</Subtitle>
          <UL>
            {results.map(result => (
              <Item>
                <Span>{result}</Span>
              </Item>
            ))}
          </UL>
        </Column>
      </Row>
      {video ? <video src={videoPath} /> : null}
    </PageSection>
  </Fragment>
);

CaseStudyItem.defaultProps = {
  videoPath: '',
};

CaseStudyItem.propTypes = {
  name: PropTypes.string.isRequired,
  objective: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  headlineBgColour: PropTypes.string.isRequired,
  headlineTextColour: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  challenges: PropTypes.arrayOf(Object).isRequired,
  results: PropTypes.arrayOf(Object).isRequired,
  video: PropTypes.bool.isRequired,
  videoPath: PropTypes.string,
};

export default CaseStudyItem;
