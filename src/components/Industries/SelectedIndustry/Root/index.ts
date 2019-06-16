import styled from 'styled-components';
import Color from '@/helpers/constants/Color';

const Root = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(64, 73, 96, 0.3);
  padding: 0 8px;
  height: 32px;
  background-color: ${Color.white};
  border-radius: 2px;
  margin-right: 10px;
`;

export default Root;
