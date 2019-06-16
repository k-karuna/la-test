import styled from 'styled-components';
import uploadImg from '@/assets/upload.png';
import successImg from '@/assets/success.png';

interface Props {
  fileUploaded: boolean;
}

const UploadImg = styled.img.attrs((props: Props) => ({
  src: props.fileUploaded ? successImg : uploadImg,
}))<Props>`
  width: 32px;
  margin-right: 10px;
`;

export default UploadImg;
