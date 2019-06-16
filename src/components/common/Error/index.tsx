import React, { Component, RefObject } from 'react';
import Root from './Root';
import Typography from '@/components/common/Typography';
import Color from '@/helpers/constants/Color';

interface Props {
  error?: string;
  target: RefObject<HTMLElement>;
}

interface State {
  top: string;
  left: string;
}

/**
 * Input component.
 */
class Error extends Component<Props, State> {
  state = {
    top: '-1000px',
    left: '-1000px',
  };

  LEFT_PADDING_PX: number = 20;

  updateErrorPosition = () => {
    const input = this.props.target.current;
    if (input) {
      const rect = input.getBoundingClientRect();
      this.setState({
        top: '0',
        left: `${rect.width + 12 + this.LEFT_PADDING_PX}px`,
      });
    }
  }

  componentDidMount() {
    this.updateErrorPosition();
    window.addEventListener('resize', this.updateErrorPosition, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateErrorPosition, false);
  }

  render() {
    const { error } = this.props;
    return (
      <Root style={this.state}>
        <Typography color={Color.white}>{error}</Typography>
      </Root>
    );
  }
}

export default Error;
