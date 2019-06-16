import styled from 'styled-components';

const SelectedWrapper = styled.div`
  position: absolute;
  top: 33px;
  padding: 0 10px;

  > * {
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default SelectedWrapper;
