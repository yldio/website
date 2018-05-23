import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { DefaultTitle, Main } from './styled';

const PageHero = ({ title, children }) => {
  const renderedTitle =
    typeof title === 'string' ? <DefaultTitle>{title}</DefaultTitle> : title;

  return (
    <Fragment>
      <header>{renderedTitle}</header>
      <Main>{children}</Main>
    </Fragment>
  );
};

PageHero.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node.isRequired,
};

PageHero.defaultProps = {
  children: [],
};

export default PageHero;
