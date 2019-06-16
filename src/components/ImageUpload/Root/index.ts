import styled from 'styled-components';

interface Props {
  isFilled: boolean;
}

const Root = styled.div<Props>`
  display: ${p => (p.isFilled ? 'none' : 'block')};
`;

export default Root;
