import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import remcalc from 'remcalc';
import { pink } from 'styles/colours';
import PageSection from '../PageSection';

const Headline = styled.div`
  width: ${remcalc(1280)};
  height: ${remcalc(470)};
  background-color: ${props => props.headlineBgColour};
  color: ${props => props.headlineTextColour};
  display: flex;
`;

const ChallengesAndResults = styled.div`
  display: flex;
`;

const Item = styled.li`
  &::before {
    content: '•';
    margin-right: ${remcalc(20)};
    color: ${pink};
  }
`;

const UnorderedList = styled.ul`
  list-style: none;
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
    <Headline
      headlineBgColour={headlineBgColour}
      headlineTextColour={headlineTextColour}
    >
      <div>
        <h1>{name}</h1>
        {objective}
      </div>
      <div>
        <img src={imagePath} alt={imageAlt} />
      </div>
    </Headline>
    <PageSection>
      {tagline}
      <ChallengesAndResults>
        <UnorderedList>
          {challenges.map(challenge => <Item>{challenge}</Item>)}
        </UnorderedList>
        <div>{results && results.map(result => <ul>{result}</ul>)}</div>
      </ChallengesAndResults>
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
