import React, { PureComponent } from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import styled from 'styled-components';
import remcalc from 'remcalc';
const { Provider, Consumer } = React.createContext();

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
  color: ${props => props.theme.colors.slateblue};
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

export class CardsList extends PureComponent {
  constructor(props) {
    super(props);

    this.cards = {};
    this.state = {};

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize(id, height) {
    this.cards = {
      // eslint-disable-next-line no-access-state-in-setstate
      ...this.cards,
      [id]: height
    };

    const tallest = Object.keys(this.cards).reduce(
      (height, id) => (this.cards[id] > height ? this.cards[id] : height),
      0
    );

    this.setState({ tallest });
  }

  render() {
    const { children } = this.props;
    const { tallest: height } = this.state;
    const { handleResize } = this;

    return <Provider value={{ height, handleResize }}>{children}</Provider>;
  }
}

class Card extends PureComponent {
  constructor(props) {
    super(props);

    this.div = React.createRef();
  }

  componentDidMount() {
    const { id, handleResize } = this.props;

    if (handleResize && this.div && this.div.current) {
      // If Card is not inside a CardsList, it wont get an handleResize
      handleResize(id, this.div.current.clientHeight);
    }
  }

  render() {
    const { height, title, points, children, props } = this.props;

    return (
      <div ref={this.div}>
        <Flex justifyCenter alignCenter>
          <FlexItem>
            <CardWrapper height={height} {...props}>
              <Title blue uppercase>
                {title}
              </Title>
              {points ? (
                <ul>
                  {points &&
                    points.map(point => <Item key={point}>{point}</Item>)}
                </ul>
              ) : null}
              {children}
            </CardWrapper>
          </FlexItem>
        </Flex>
      </div>
    );
  }
}

export default ({ title, points, children, ...props }) => (
  <Consumer>
    {value => (
      <Card {...props} {...value} title={title} points={points}>
        {children}
      </Card>
    )}
  </Consumer>
);
