import styled from 'styled-components';

const PreviewItem = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  border-bottom: 1px solid rgba(64, 73, 96, 0.1);
  min-height: 60px;

  &:first-child {
    margin-top: 10px;
  }

  > * {
    &:nth-child(2) {
      margin-left: 14px;
    }

    &:nth-child(3) {
      margin-left: auto;
    }
  }
`;

export default PreviewItem;
