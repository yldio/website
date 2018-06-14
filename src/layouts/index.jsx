import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import applyGlobalStyles from 'styles/applyGlobalStyles';
import Header from 'components/Header';
import Footer from 'components/Footer';
import theme from '../theme';

applyGlobalStyles();

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Header />
      {children()}
      <Footer />
    </Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

export default Layout;
