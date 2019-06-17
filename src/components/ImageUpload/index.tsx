import React, { FC } from 'react';
import Preview from './Preview';
import Root from './Root';
import FileUpload from '@/components/FileUpload';

interface Props {
  onChange: (files: File[]) => void;
  onDelete: (filename: string) => void;
  files: File[];

  id: number;
  required: boolean;
  placeholder: string;
  maxFileSizeMB: number;
  fileFormat: string[];
  info: string;
  multiple: boolean;
  error: string;
}

const ImageUpload: FC<Props> = (props: Props) => {
  const IMAGE_MIN_HEIGHT = 600;
  const IMAGE_MIN_WIDTH = 800;

  const onFilesAdded = (files: File[]) => {
    files.forEach((file: File) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.height >= IMAGE_MIN_HEIGHT || img.width >= IMAGE_MIN_WIDTH) {
          const { onChange } = props;
          onChange(files);
        }
      };
    });
  };

  const deleteFile = (filename: string) => {
    const { onDelete } = props;
    onDelete(filename);
  };

  const { files, id, required, placeholder, maxFileSizeMB, fileFormat, info, multiple, error } = props;
  return (
    <Root isFilled={files.length >= 8}>
      <FileUpload
        id={id}
        required={required}
        placeholder={placeholder}
        maxFileSizeMB={maxFileSizeMB}
        fileFormat={fileFormat}
        info={info}
        multiple={multiple}
        error={error}
        onChange={onFilesAdded}
        files={files}
      />
      {files.map((file, index) => (
        <Preview key={index} file={file} onDelete={deleteFile} />
      ))}
    </Root>
  );
};

export default ImageUpload;
