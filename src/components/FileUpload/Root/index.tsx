import styled from 'styled-components';
import Color from '@/helpers/constants/Color';

interface Props {
  fileUploaded: boolean;
  error: boolean;
}

const Root = styled.div<Props>`
  position: relative;
  border: 1px
    ${p => (p.fileUploaded ? `solid ${Color.green}` : p.error ? `dotted ${Color.red}` : 'dotted rgba(64, 73, 96, 0.4)')};
  border-radius: 2px;
`;

export default Root;
