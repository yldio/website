import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';
import styled from 'styled-components';

import { H3, H4, H5, Copy } from 'components/typography';
import Section from 'components/section';
import remcalc from 'remcalc';

import LisbonMap from 'assets/lisbon-map.png';
import LondonMap from 'assets/london-map.png';
import ManchesterMap from 'assets/manchester-map.png';
import PortoMap from 'assets/porto-map.png';

const MapsCity = styled.img`
  width: 100%;
`;

const MapWrapper = styled.div`
  box-shadow: 10.3px 12.3px 40px 5px rgba(25, 5, 51, 0.15);
  border-bottom: ${remcalc(4)} solid ${props => props.theme.colors.deeppink};
  background: white;
  margin-bottom: ${remcalc(20)};
`;

const Address = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 34px 20px 20px 51px;
  min-height: 150px;
`;
const Link = styled.a`
  text-decoration: none;
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
              <Col xs={12} md={6}>
                <MapWrapper>
                  <Link
                    href="https://www.google.co.uk/maps/place/YLD/@51.5208762,-0.0999518,17z/data=!3m1!4b1!4m5!3m4!1s0x487604ad45225ae3:0xdbe11193b5ca8a4f!8m2!3d51.5208762!4d-0.0977631"
                    target="_blank"
                  >
                    <MapsCity src={LondonMap} />
                  </Link>
                  <Address>
                    <H5>London</H5>
                    <Copy>
                      124 Aldersgate Street, EC1A 4JQ +44 (0) 203 514 4678
                    </Copy>
                  </Address>
                </MapWrapper>
              </Col>
              <Col xs={12} md={6}>
                <MapWrapper>
                  <Link
                    href="https://www.google.co.uk/maps/place/231+Deansgate,+Manchester+M3+4EN/@53.4776638,-2.2519356,17z/data=!3m1!4b1!4m5!3m4!1s0x487bb1e81fa99275:0x20eda2f22b0c703d!8m2!3d53.4776638!4d-2.2497469"
                    target="_blank"
                  >
                    <MapsCity src={ManchesterMap} />
                  </Link>
                  <Address>
                    <H5>Manchester</H5>
                    <Copy>231-233 Deansgate, Manchester M3 4EN,</Copy>
                  </Address>
                </MapWrapper>
              </Col>
            </Row>
          </Margin>
          <Col xs={12}>
            <Margin bottom={15} md={6}>
              <H4>Portugal</H4>
            </Margin>
          </Col>
          <Row>
            <Col xs={12} md={6}>
              <MapWrapper xs={12} md={6}>
                <Link
                  href="https://www.google.co.uk/maps/place/R.+Ramalho+Ortig%C3%A3o+8,+1070-143+Lisboa,+Portugal/@38.7355695,-9.1579521,17z/data=!3m1!4b1!4m5!3m4!1s0xd19330d9db111b7:0x9667d442581d848f!8m2!3d38.7355695!4d-9.1557634"
                  target="_blank"
                >
                  <MapsCity src={LisbonMap} />
                </Link>
                <Address>
                  <H5>Lisbon</H5>
                  <Copy>Rua Ramalho Ortigão 8, 3rd floor left 1070-230</Copy>
                </Address>
              </MapWrapper>
            </Col>
            <Col xs={12} md={6}>
              <MapWrapper xs={12} md={6}>
                <Link
                  href="https://www.google.co.uk/search?q=Rua+do+Infante+D.+Henrique+73+4050-492+Porto&rlz=1C5CHFA_enGB795GB795&oq=Rua+do+Infante+D.+Henrique+73+4050-492+Porto+&aqs=chrome..69i57.1305j0j4&sourceid=chrome&ie=UTF-8"
                  target="_blank"
                >
                  <MapsCity src={PortoMap} />
                </Link>
                <Address>
                  <H5>Porto </H5>
                  <Copy>Rua do Infante D. Henrique 73 4050-492 Porto</Copy>
                </Address>
              </MapWrapper>
            </Col>
          </Row>
        </Row>
      </Grid>
    </Padding>
  </Section>
);
