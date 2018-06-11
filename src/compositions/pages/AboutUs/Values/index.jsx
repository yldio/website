import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TileGrid, { Tile } from 'components/TileGrid';
import PageSection from 'components/PageSection';
import { Copy, H2 } from 'components/Typography';
import {
  TileContent,
  TileContentTitle,
  TileContentBody,
  Header,
  Description,
  OurValues,
  ValuesSection,
} from './styled';

export const Value = ({ header, children }) => (
  <ValuesSection>
    <Header>{header}</Header>
    <Description>{children}</Description>
  </ValuesSection>
);

const Values = () => (
  <Fragment>
    <PageSection data-selector="about-us:our-values">
      <H2>Our Values</H2>

      <Copy light>
        We help you future proof your business though a new style of consulting,
        ground up. We connect and educate engineering, product and leadership to
        help you navigate digital transformation, grow your business and tackle
        core customer problems. We’re one of the most renowned technology
        companies in Europe.
      </Copy>
      <Copy>
        Some amazing support copy with go here to reenforce whatever section it
        is relevant too. Some amazing support copy with go here to reenforce
        whatever section it is relevant too. Some amazing support copy with go
        here to reenforce whatever section it is relevant too. Some amazing
        support copy with go here to reenforce whatever section it is relevant
        too.
      </Copy>
    </PageSection>
    <PageSection>
      <TileGrid>
        <OurValues>
          <Value header="Your opportunity is limitless">
            You are the driver of change. We never give up, we begin again. Be
            adventuruous. Push the boundaries. Go the extra mile.
          </Value>
          <Value header="Have integrity, be honest">
            Lead by example. No “bullshit”. Be real, have respect.
          </Value>
          <Value header="Get better as a team">
            Collaborate, collaborate, collaborate. Never stop learning annd
            learn together - innovation can be the innovation you inspire in
            others. Be inquisitive. Ask why, and be preparered to be asked why
            of yourself.
          </Value>
          <Value header="Recognise success">
            Understand the purpose. When you succeed, help others do the same.
            Celebrate, even when we fail.
          </Value>
          <Value header="Have courage, stay humble">
            Put our partners success ahead of our own and treat them as we would
            our own team. Have strong opinions, weakly held. Good enough isn’t
            good enough.
          </Value>
        </OurValues>
      </TileGrid>
    </PageSection>
    <PageSection wide>
      <TileGrid>
        <Tile>
          <TileContent>
            <TileContentTitle>Services</TileContentTitle>
            <TileContentBody>
              We enable your organisation to deliver world-class technology and
              user experiences, long after we leave.
            </TileContentBody>
          </TileContent>
        </Tile>
        <Tile colour="darker">
          <TileContent>
            <TileContentTitle>Community</TileContentTitle>
            <TileContentBody>
              We define ourselves by the people who represent us.
            </TileContentBody>
          </TileContent>
        </Tile>
      </TileGrid>
    </PageSection>
  </Fragment>
);

export default Values;

Value.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
