import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  align-items: center;
  height: 42px;

  > * {
    &:nth-child(1) {
      margin-right: 16px;
    }

    &:nth-child(3) {
      margin-left: auto;
      margin-right: 10px;
    }
  }
`;

export default Content;
