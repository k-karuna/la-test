import styled from 'styled-components';
import deleteImg from '@/assets/delete.png';

const DeleteButton = styled.button`
  background: none;
  border: none;
  background-image: url(${deleteImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 12px;
  height: 16px;
  margin-left: 16px;
  border-radius: 2px;
`;

export default DeleteButton;
