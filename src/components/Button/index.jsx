import React from 'react';
import PropTypes from 'prop-types';
import { withButtonStyles } from './styled';

const Button = ({ component, ...props }) => {
  const Element = withButtonStyles(component);

  return <Element {...props} />;
};

Button.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf(['a', 'button']),
  ]),
};

Button.defaultProps = {
  component: 'a',
};

export default Button;
