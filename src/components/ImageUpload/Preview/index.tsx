import React, { FC } from 'react';
import PreviewItem from './PreviewItem';
import Image from './Image';
import Typography from '@/components/common/Typography';
import DeleteButton from '@/components/common/DeleteButton';

interface Props {
  file: File;
  onDelete: (filename: string) => void;
}

const Preview: FC<Props> = ({ file, onDelete, ...rest }) => {
  const handleDelete = (e: React.SyntheticEvent, filename: string) => {
    e.preventDefault();
    onDelete(filename);
  };

  return (
    <PreviewItem>
      <Image src={URL.createObjectURL(file)} />
      <Typography opacity={0.6}>{file.name}</Typography>
      <DeleteButton onClick={e => handleDelete(e, file.name)} />
    </PreviewItem>
  );
};

export default Preview;
