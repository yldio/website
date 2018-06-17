import React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import styled from 'styled-components';
import remcalc from 'remcalc';

import { H5, Copy } from 'components/typography';

const CardWrapper = styled.div`
  padding: ${remcalc(30)};
  border-bottom: ${remcalc(4)} solid ${props => props.theme.colors.deeppink};
  box-shadow: ${remcalc(10)} ${remcalc(12)} ${remcalc(40)} ${remcalc(5)}
    rgba(25, 5, 52, 0.15);
  width: ${props => remcalc(props.width ? props.width : 305)};
  min-height: ${props => remcalc(props.height ? props.height : 240)};
  background: white;
  margin-bottom: ${remcalc(20)};
`;

const Title = styled(H5)`
  border-bottom: ${remcalc(1)} solid ${props => props.theme.colors.lavender};
  color: ${remcalc(1)} solid ${props => props.theme.colors.slateblue};
  padding-bottom: ${remcalc(15)};
  margin-bottom: ${remcalc(20)};
  margin-top: 0;
`;

const Item = Copy.withComponent('li').extend`
  &::before {
    content: '•';
    margin-right: ${remcalc(20)};
    color: ${props => props.theme.colors.deeppink};
  }

  &:not(:last-child) {
    margin-bottom: ${remcalc(20)};
  }
`;

export default ({ title, points, children, ...props }) => (
  <Flex justifyCenter alignCenter>
    <FlexItem>
      <CardWrapper {...props}>
        <Title blue uppercase>
          {title}
        </Title>
        {points ? (
          <ul>
            {points && points.map(point => <Item key={point}>{point}</Item>)}
          </ul>
        ) : null}
        {children}
      </CardWrapper>
    </FlexItem>
  </Flex>
);
