import React, { Fragment } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';
import styled from 'styled-components';
import remcalc from 'remcalc';
import BaseLink from 'gatsby-link';
import Section from 'components/section';
import { H5, Copy } from 'components/typography';
import Flex, { FlexItem } from 'styled-flex-component';
import { Clock } from 'components/icons';

const DataWrapper = Flex.extend`
  background-color: ${props => props.theme.colors.deeppink};
  color: ${props => props.theme.colors.white};
  text-align: center;
  font-weight: 400;
  height: 100%;
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

const Link = styled(BaseLink)`
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

const DetailsWrapper = Copy.extend`
  padding-bottom: 22px;
`;

const ClockIcon = styled.div`
  width: 100%;
`;

export default ({ futureMeetups }) => (
  <Fragment>
    <Section>
      <Col xs={12}>
        <Margin bottom={{ xs: 15, md: 15 }}>
          <H5>Next Meetup</H5>
        </Margin>
      </Col>
    </Section>
    <Section>
      {futureMeetups.map(futureMeetup => (
        <Col key={`next-meetups-row-${futureMeetup.id}`} xs={12} md={12}>
          <MeetupsDetails>
            <Margin bottom={{ xs: 15, md: 35 }}>
              <Row>
                <Col xs={12} md={3} height>
                  <DataWrapper column alignCenter justifyCenter>
                    <FlexItem>
                      <Day>{futureMeetup.data}</Day>
                      <Month>{futureMeetup.month}</Month>
                    </FlexItem>
                  </DataWrapper>
                </Col>
                <Col xs={12} md={5}>
                  <Padding left={{ xs: 20 }} right={{ xs: 20 }}>
                    <DetailsWrapper>
                      <Header darker>{futureMeetup.title}</Header>
                      <p>{futureMeetup.description}</p>
                      <Link>{futureMeetup.SignUpLink}</Link>
                    </DetailsWrapper>
                  </Padding>
                </Col>
                <Col xs={12} md={4}>
                  <Padding left={{ xs: 20 }} right={{ xs: 20 }}>
                    <DetailsWrapper>
                      <ClockIcon icon={<Clock />} />
                      <Header darker>{futureMeetup.hour}</Header>
                      <p>{futureMeetup.address}</p>
                    </DetailsWrapper>
                  </Padding>
                </Col>
              </Row>
            </Margin>
          </MeetupsDetails>
        </Col>
      ))}
    </Section>
  </Fragment>
);
