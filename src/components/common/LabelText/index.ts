import styled from 'styled-components';
import requiredImg from '@/assets/required.png';

interface Props {
  required: boolean;
}

const LabelText = styled.span<Props>`
  display: flex;
  &:after {
    content: '';
    display: ${p => (p.required ? 'inline-block' : 'none')};
    width: 7px;
    height: 7px;
    margin-left: 2px;
    margin-top: 2px;
    background: url(${requiredImg}) no-repeat;
    background-size: 7px;
    opacity: 0.8;
  }
`;

export default LabelText;
