import styled from 'styled-components';
import { setInitialInputStyle } from '../Root';

const Description = styled.textarea`
  ${setInitialInputStyle};
  min-height: 240px;
  padding-top: 10px;
`;

export default Description;
