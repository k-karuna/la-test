import styled from 'styled-components';
import Color from '@/helpers/constants/Color';

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  cursor: pointer;
  padding: 0 16px;

  &:hover {
    background-color: ${Color.lightGray};
  }
`;

export default Item;
