import styled from 'styled-components';

const FileLabel = styled.label`
  display: flex;
  align-items: center;
  min-height: 72px;
  padding: 0 24px;
  cursor: pointer;
  > * {
    &:nth-child(3) {
      margin-left: auto;
    }
  }
`;

export default FileLabel;
