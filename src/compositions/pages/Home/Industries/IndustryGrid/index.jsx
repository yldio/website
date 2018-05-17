import React from 'react';

import {
  faBurn,
  faCar,
  faCode,
  faCreditCard,
  faCubes,
  faPlane,
  faShoppingBag,
  faTv,
} from '@fortawesome/free-solid-svg-icons';

import { Grid, Icon, Item, Body, CTABody, Title, Content } from './styled';

const IndustryGrid = () => (
  <Grid>
    <Item>
      <Body>
        <Title>
          <Icon icon={faCode} /> Technology
        </Title>
        <Content>Google, Microsoft, Canon</Content>
      </Body>
    </Item>
    <Item>
      <Body>
        <Title>
          <Icon icon={faCar} /> Automotive
        </Title>
        <Content>Google, Microsoft, Canon</Content>
      </Body>
    </Item>
    <Item>
      <Body>
        <Title>
          <Icon icon={faTv} /> Entertainment
        </Title>
        <Content>Google, Microsoft, Canon</Content>
      </Body>
    </Item>
    <Item>
      <Body>
        <Title>
          <Icon icon={faCreditCard} /> Financial Services
        </Title>
        <Content>Google, Microsoft, Canon</Content>
      </Body>
    </Item>
    <Item>
      <Body>
        <Title>
          <Icon icon={faPlane} /> Travel
        </Title>
        <Content>Google, Microsoft, Canon</Content>
      </Body>
    </Item>
    <Item>
      <Body>
        <Title>
          <Icon icon={faBurn} /> Energy
        </Title>
        <Content>Google, Microsoft, Canon</Content>
      </Body>
    </Item>
    <Item>
      <Body>
        <Title>
          <Icon icon={faShoppingBag} /> Retail
        </Title>
        <Content>Google, Microsoft, Canon</Content>
      </Body>
    </Item>
    <Item>
      <Body>
        <Title>
          <Icon icon={faCubes} /> Blockchain
        </Title>
        <Content>Google, Microsoft, Canon</Content>
      </Body>
    </Item>
    <Item>
      <CTABody>
        <Title>View All Industries →</Title>
      </CTABody>
    </Item>
  </Grid>
);

export default IndustryGrid;
