import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import '../base.scss';

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>{children()}</Fragment>
  </ThemeProvider>
);
