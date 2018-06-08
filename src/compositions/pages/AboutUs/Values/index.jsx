import React, { Fragment } from 'react';
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
          <ValuesSection>
            <Header>Your opportunity is limitless</Header>
            <Description>
              You are the driver of change. We never give up, we begin again. Be
              adventuruous. Push the boundaries. Go the extra mile.
            </Description>
          </ValuesSection>
          <ValuesSection>
            <Header>Have integrity, be honest</Header>
            <Description>
              Lead by example. No “bullshit”. Be real, have respect.
            </Description>
          </ValuesSection>
          <ValuesSection>
            <Header>Get better as a team</Header>
            <Description>
              Collaborate, collaborate, collaborate. Never stop learning annd
              learn together - innovation can be the innovation you inspire in
              others. Be inquisitive. Ask why, and be preparered to be asked why
              of yourself.
            </Description>
          </ValuesSection>
          <ValuesSection>
            <Header>Recognise success</Header>
            <Description>
              Understand the purpose. When you succeed, help others do the same.
              Celebrate, even when we fail.
            </Description>
          </ValuesSection>
          <ValuesSection>
            <Header>Have courage, stay humble</Header>
            <Description>
              Put our partners success ahead of our own and treat them as we
              would our own team. Have strong opinions, weakly held. Good enough
              isn’t good enough.
            </Description>
          </ValuesSection>
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
