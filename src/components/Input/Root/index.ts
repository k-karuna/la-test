import styled from 'styled-components';
import Color from '@/helpers/constants/Color';

interface Props {
  error?: boolean;
  padding?: number;
}

const DEFAULT_PADDING = 16;

const setInitialInputStyle = (p: Props) => {
  return `
    width: 100%;
    font-family: Fira Sans;
    font-size: 14px;
    color: ${Color.darkGray};

    padding: 0 ${DEFAULT_PADDING}px;
    border: 1px solid ${p.error ? Color.red : 'rgba(64, 73, 96, 0.3)'};
    border-radius: 2px;

    &:placeholder {
      opacity: 0.2;
    }
  `;
};

const Root = styled.input<Props>`
  ${setInitialInputStyle}
  padding-left: ${(p: Props) => (p.padding ? p.padding : DEFAULT_PADDING)}px;
  height: 48px;
`;
export { setInitialInputStyle };
export default Root;
