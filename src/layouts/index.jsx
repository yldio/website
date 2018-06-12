import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import applyGlobalStyles from 'styles/applyGlobalStyles';
import Header from 'components/Header';
import Footer from 'components/Footer';

applyGlobalStyles();

const Layout = ({ children, location }) => (
  <Fragment>
    <Header dark={location.pathname.includes('services')} />
    {children()}
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.func.isRequired,
};

export default Layout;
