import React from 'react';
import PropTypes from 'prop-types';
import { Before, Header, DefaultTitle, Main, Wrapper } from './styled';

const PageHero = ({ before, children, title, white, big }) => {
  const renderedTitle =
    typeof title === 'string' ? <DefaultTitle>{title}</DefaultTitle> : title;

  return (
    <Wrapper>
      <Header>
        {before && (
          <Before white={white} big={big}>
            {before}
          </Before>
        )}
        {renderedTitle}
      </Header>
      <Main white={white}>{children}</Main>
    </Wrapper>
  );
};

PageHero.propTypes = {
  before: PropTypes.string,
  children: PropTypes.node,
  white: PropTypes.bool,
  big: PropTypes.bool,
  title: PropTypes.node.isRequired
};

PageHero.defaultProps = {
  before: null,
  children: [],
  white: false,
  big: false
};

export { Section } from './styled';

export default PageHero;
