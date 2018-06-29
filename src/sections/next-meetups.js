import React, { Fragment } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';
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

  ${breakpoint('xs')`
  margin-bottom: ${remcalc(21)};`};
`;

const Link = styled(BaseLink)`
  font-size: ${remcalc(18)};
  line-height: ${remcalc(31)};
  color: ${props => props.theme.colors.deeppink};
  text-underline-position: under;
`;

const MeetupsDetails = styled.div`
  box-shadow: 10.3px 12.3px 40px 5px rgba(25, 5, 51, 0.15);
`;

const Header = H5.extend`
  padding-top: 22px;
  padding-bottom: 20px;
  padding-left: 10px;
  display: inline-block;
`;

const HeaderMeetup = H5.extend`
  padding-top: 22px;
  padding-bottom: 20px;
  display: inline-block;
`;

const DetailsWrapper = Copy.extend`
  padding-bottom: 22px;
`;

const Address = styled.div`
  padding-left: 30px;
  padding-right: 11px;
`;

export default ({ futureMeetups }) => {
  console.log({ futureMeetups });
  console.log(
    futureMeetups.map(futureMeetup => futureMeetup.node.thisMeetupCode)
  );

  return (
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
          <Col key={`next-meetups-row-${futureMeetup.node}`} xs={12} md={12}>
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
                    <Padding left={{ xs: 20, md: 2 }} right={{ xs: 20, md: 2 }}>
                      <DetailsWrapper>
                        <HeaderMeetup darker>{futureMeetup.title}</HeaderMeetup>
                        <p>{futureMeetup.description}</p>
                        <Link>{futureMeetup.SignUpLink}</Link>
                      </DetailsWrapper>
                    </Padding>
                  </Col>
                  <Col xs={12} md={4}>
                    <Padding left={{ xs: 20, md: 2 }} right={{ xs: 20, md: 2 }}>
                      <DetailsWrapper>
                        <Flex alignCenter>
                          <Clock />
                          <Header darker>{futureMeetup.hour}</Header>
                        </Flex>
                        <Address>{futureMeetup.address}</Address>
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
};
