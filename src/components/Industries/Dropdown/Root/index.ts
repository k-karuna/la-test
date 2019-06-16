import styled from 'styled-components';
import Color from '@/helpers/constants/Color';

const Root = styled.div`
  position: absolute;
  width: 380px;
  max-height: 386px;
  overflow-y: scroll;
  background-color: ${Color.white};
  border: 1px solid rgba(64, 73, 96, 0.3);
  border-radius: 2px;
  z-index: 1;
`;

export default Root;
