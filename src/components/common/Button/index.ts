import styled from 'styled-components';
import Color from '@/helpers/constants/Color';

interface Props {
  variant: 'light' | 'dark';
}

const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  background: none;
  border: none;
  background-color: ${p => (p.variant === 'light' ? Color.white : Color.darkGray)};
  border: 1px solid ${Color.darkGray};
  border-radius: 2px;
`;

export default Button;
