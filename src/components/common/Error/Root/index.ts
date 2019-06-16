import styled from 'styled-components';
import Color from '@/helpers/constants/Color';

const ERROR_HEIGHT_PX = 48;

const Root = styled.div`
  position: absolute;
  height: ${ERROR_HEIGHT_PX}px;
  padding: 0 21px;
  display: flex;
  align-items: center;
  background-color: ${Color.red};
  border-radius: 2px;
  min-width: 230px;

  @media (max-width: 768px) {
    min-width: 150px;
  }

  &:after {
    position: absolute;
    top: 0px;
    left: -12px;
    content: '';
    width: 0;
    height: 0;
    border-right: solid 13px ${Color.red};
    border-bottom: solid 24px transparent;
    border-top: solid 24px transparent;
  }
`;

export { ERROR_HEIGHT_PX };
export default Root;
