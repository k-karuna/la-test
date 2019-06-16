import styled from 'styled-components';
import logoutImg from '@/assets/logout.png';

const Logout = styled.button`
  background: none;
  border: none;
  background-image: url(${logoutImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 12px;
  height: 12px;
`;

export default Logout;
