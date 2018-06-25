import React, { Fragment } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';
import styled from 'styled-components';
import remcalc from 'remcalc';

import Section from 'components/section';
import { H5, Copy } from 'components/typography';

const DataWrapper = styled.div`
  background-color: ${props => props.theme.colors.deeppink};
  color: ${props => props.theme.colors.white};
  text-align: center;
  font-weight: 400;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
  padding-top: 42px;
  padding-bottom: 30px;
`;

const Day = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: 72px;
  font-weight: 900;
`;

const Month = styled.div`
  color: ${props => props.theme.colors.white};
  font-weight: 400;
  font-size: 18px;
`;

const Link = styled.div`
  font-size: ${remcalc(18)};
  line-height: ${remcalc(31)};
  color: ${props => props.theme.colors.deeppink};
`;

const MeetupsDetails = styled.div`
  box-shadow: 10.3px 12.3px 40px 5px rgba(25, 5, 51, 0.15);
`;

const Header = H5.extend`
  padding-top: 22px;
  padding-bottom: 20px;
`;

export default ({ futureMeetups }) => (
  <Fragment>
    <Section>
      <Col xs={12}>
        <Margin bottom={{ xs: 15, md: 24 }}>
          <H5>Next Meetup</H5>
        </Margin>
      </Col>
    </Section>
    <Section>
      {futureMeetups.map(futureMeetup => (
        <Col key={`next-meetups-row-${futureMeetup.id}`} xs={12} md={12}>
          <MeetupsDetails>
            <Row>
              <Col xs={3} md={3} height>
                <DataWrapper>
                  <Day>{futureMeetup.data}</Day>
                  <Month>{futureMeetup.month}</Month>
                </DataWrapper>
              </Col>
              <Col xs={5} md={5}>
                <Copy>
                  <Header darker>{futureMeetup.title}</Header>
                  <p>{futureMeetup.description}</p>
                  <Link>{futureMeetup.linkB}</Link>
                </Copy>
              </Col>
              <Col xs={4} md={4}>
                <Copy>
                  <Header darker>{futureMeetup.hour}</Header>
                  <p>{futureMeetup.address}</p>
                </Copy>
              </Col>
            </Row>
          </MeetupsDetails>
        </Col>
      ))}
    </Section>
  </Fragment>
);
