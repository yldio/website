import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';
import styled from 'styled-components';

import { H3, H4, H5, Copy } from 'components/typography';
import Section from 'components/section';

import LisbonMap from 'assets/lisbon-map.png';
import LondonMap from 'assets/london-map.png';
import ManchesterMap from 'assets/manchester-map.png';
import PortoMap from 'assets/porto-map.png';

const MapsCity = styled.img`
  width: 100%;
`;

const MapWrapper = Col.extend`
  box-shadow: 10.3px 12.3px 40px 5px rgba(25, 5, 51, 0.15);
`;

const Address = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 34px 20px 20px 51px;
  padding-bottom: 90px;
`;

export default () => (
  <Section data-selector="contact-us">
    <Padding top={{ xs: 15, md: 32 }} bottom={{ xs: 15, md: 65 }}>
      <Grid>
        <Row>
          <Col xs={12}>
            <Margin bottom={30}>
              <H3 decorated>Contact Us</H3>
            </Margin>
          </Col>
          <Margin bottom={15}>
            <Col xs={12}>
              <Margin bottom={15}>
                <H4>UK</H4>
              </Margin>
            </Col>
            <Row>
              <MapWrapper xs={12} md={6}>
                <Margin bottom={15}>
                  <MapsCity src={LondonMap} />
                </Margin>
                <Address>
                  <H5>London</H5>
                  <Copy>
                    124 Aldersgate Street, EC1A 4JQ +44 (0) 203 514 4678
                  </Copy>
                </Address>
              </MapWrapper>
              <MapWrapper xs={12} md={6}>
                <Margin bottom={15}>
                  <MapsCity src={ManchesterMap} />
                </Margin>
                <Address>
                  <H5>Manchester</H5>
                  <Copy>231-233 Deansgate, Manchester M3 4EN,</Copy>
                </Address>
              </MapWrapper>
            </Row>
          </Margin>
          <Col xs={12}>
            <Margin bottom={15} md={6}>
              <H4>Portugal</H4>
            </Margin>
          </Col>
          <Row>
            <MapWrapper xs={12} md={6}>
              <Margin bottom={15}>
                <MapsCity src={PortoMap} />
              </Margin>
              <Address>
                <H5>Porto</H5>
                <Copy>
                  124 Aldersgate Street, EC1A 4JQ +44 (0) 203 514 4678
                </Copy>
              </Address>
            </MapWrapper>
            <MapWrapper xs={12} md={6}>
              <Margin bottom={15}>
                <MapsCity src={LisbonMap} />
              </Margin>
              <Address>
                <H5>Lisbon</H5>
                <Copy>
                  124 Aldersgate Street, EC1A 4JQ +44 (0) 203 514 4678
                </Copy>
              </Address>
            </MapWrapper>
          </Row>
        </Row>
      </Grid>
    </Padding>
  </Section>
);
