import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import graphql from 'graphql-tag';
import { canUseDOM } from 'exenv';

import JoinUs from 'sections/join-us';
import Footer from 'sections/footer';
import { mapProps } from 'recompose';
import AdditionalServicesDetails from 'sections/additional-services-details';
import { navigateTo } from 'gatsby-link';

const AdditionalServices = ({ page, additionalServices }) => {
  const getParameterByName = name => {
    // Const url = window.location.href;
    const windowGlobal = typeof window !== 'undefined' && window;
    const test = canUseDOM
      ? windowGlobal
      : {
          location: { href: 'http://localhost:3000/' }
        };
    const url = test.location.href;
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    return results[2] || '';
  };

  const pageRef = getParameterByName('pageRef');
  const additionalService = additionalServices.filter(
    el => el.node.path === pageRef
  )[0];

  if (!additionalService) {
    console.warn(
      '[additional-services] No additional service found for this page ref.',
      pageRef
    );
    navigateTo('/services');
    return null;
  }

  return (
    <Fragment>
      <Helmet title={page.title} meta={page.metadata} />
      <AdditionalServicesDetails additionalService={additionalService.node} />
      <JoinUs />
      <Footer />
    </Fragment>
  );
};

export default mapProps(props => ({
  page: props.data.contentfulPage,
  additionalServices: props.data.allContentfulAdditionalServices.edges
}))(AdditionalServices);

export const pageQuery = graphql`
  query AdditionalServices {
    contentfulPage(identifier: { eq: "additional-services" }) {
      title
      metadata {
        name
        content
      }
    }

    allContentfulAdditionalServices {
      edges {
        node {
          headerTitle
          headerSubtitle
          servicesTitle
          servicesDescription {
            servicesDescription
          }
          subtitleLeft
          subtitleRight
          subdescriptionLeft {
            subdescriptionLeft
          }
          subdescriptionRight {
            subdescriptionRight
          }
          path
        }
      }
    }
  }
`;
