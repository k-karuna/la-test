import styled from 'styled-components';
import { TypographyProps } from '../';

const Root = styled.span<TypographyProps>`
  font-family: Fira Sans;
  color: ${p => p.color};
  font-size: ${p => p.size}px;
  font-weight: ${p => (p.weight ? p.weight : 'normal')};
  font-style: ${p => p.fontStyle};
  line-height: ${p => (p.lineHeight === 'small' ? 144 : 240)}%;
  opacity: ${p => p.opacity};
  margin: 0;
`;

export default Root;
