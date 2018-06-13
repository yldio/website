import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import PropTypes from 'prop-types';

import applyGlobalStyles from 'styles/applyGlobalStyles';
import Header from 'components/Header';
import Footer from 'components/Footer';

applyGlobalStyles();

const Layout = ({ children }) => (
  <Fragment>
    <Header dark />
    {children()}
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

export default Layout;
