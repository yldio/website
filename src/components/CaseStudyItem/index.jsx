import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const CaseStudyItem = ({
  name,
  objective,
  imagePath,
  imageAlt,
  tagline,
  challenges,
  results,
  // video,
  // videoPath,
}) => (
  <Fragment>
    <div>
      <div>
        {name}
        {objective}
      </div>
      <div>
        <img src={imagePath} alt={imageAlt} />
      </div>
    </div>
    <div>
      {tagline}
      <div>{challenges}</div>
      <div>{results}</div>
    </div>
  </Fragment>
);

CaseStudyItem.propTypes = {
  name: PropTypes.string.isRequired,
  objective: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  challenges: PropTypes.arrayOf(Object).isRequired,
  results: PropTypes.arrayOf(Object).isRequired,
  // video: PropTypes.bool.isRequired,
  // videoPath: PropTypes.string,
};

export default CaseStudyItem;
