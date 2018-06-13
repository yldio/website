import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import remcalc from 'remcalc';
import { Copy } from 'components/Typography';
import { pink } from 'styles/colours';

const CardWrapper = styled.div`
  padding: ${remcalc(30)};
  border-bottom: ${remcalc(4)} solid ${pink};
  box-shadow: ${remcalc(10)} ${remcalc(12)} ${remcalc(40)} ${remcalc(5)}
    rgba(25, 5, 52, 0.15);
  width: ${remcalc(305)};
  min-height: ${remcalc(240)};
  background: white;
  margin-bottom: ${remcalc(20)};
`;

const Title = styled(Copy)`
  border-bottom: ${remcalc(1)} solid #dcd9ea;
  padding-bottom: ${remcalc(15)};
  margin-bottom: ${remcalc(20)};
  margin-top: 0;
`;

const Item = styled.li`
  &::before {
    content: '•';
    color: ${pink};
    margin-left: ${remcalc(-20)};
    position: absolute;
  }
  margin-left: ${remcalc(20)};
  position: relative;
  &:not(:last-child) {
    margin-bottom: ${remcalc(20)};
  }
`;

const Card = ({ title, points }) => (
  <CardWrapper>
    <Title blue uppercase>
      {title}
    </Title>
    <ul>{points && points.map(point => <Item>{point}</Item>)}</ul>
  </CardWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
