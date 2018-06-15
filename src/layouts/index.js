import React from 'react';
import { ThemeProvider } from 'styled-components';

import Base from 'components/base';
import theme from '../theme';

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Base>{children()}</Base>
  </ThemeProvider>
);
