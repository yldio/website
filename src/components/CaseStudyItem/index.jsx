import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import remcalc from 'remcalc';

const Headline = styled.div`
  width: ${remcalc(1280)};
  height: ${remcalc(470)};
  background-color: ${props => props.headlineBgColour};
  color: ${props => props.headlineTextColour};
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
        {name}
        {objective}
      </div>
      <div>
        <img src={imagePath} alt={imageAlt} />
      </div>
    </Headline>
    <div>
      {tagline}
      <div>{challenges}</div>
      <div>{results}</div>
    </div>
    {video ? <video src={videoPath} /> : null}
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
