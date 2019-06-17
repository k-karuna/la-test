import React, { FC } from 'react';
import Preview from './Preview';
import Root from './Root';
import FileUpload from '@/components/FileUpload';

interface Props {
  onChange: (files: File[]) => void;
  onDelete: (filename: string) => void;
  files: File[];
  name: string;
  id: number;
  required: boolean;
  placeholder: string;
  maxFileSizeMB: number;
  fileFormat: string[];
  info: string;
  multiple: boolean;
  error: string;
  alternativeStrict: string;
}

const ImageUpload: FC<Props> = (props: Props) => {
  const IMAGE_MIN_HEIGHT = 600;
  const IMAGE_MIN_WIDTH = 800;
  const MAX_IMAGES = 8;

  const onFilesAdded = (files: File[]) => {
    const filesLeft = MAX_IMAGES - props.files.length;

    files.forEach((file: File, index: number) => {
      if (index < filesLeft) {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
          if (img.height >= IMAGE_MIN_HEIGHT || img.width >= IMAGE_MIN_WIDTH) {
            const { onChange } = props;
            onChange(files);
          }
        };
      } else return;
    });
  };

  const deleteFile = (filename: string) => {
    const { onDelete } = props;
    onDelete(filename);
  };

  const {
    name,
    files,
    id,
    required,
    placeholder,
    maxFileSizeMB,
    fileFormat,
    info,
    multiple,
    error,
    alternativeStrict,
  } = props;
  return (
    <Root isFilled={files.length >= 8}>
      <FileUpload
        name={name}
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
        alternativeStrict={alternativeStrict}
      />
      {files.map((file, index) => (
        <Preview key={index} file={file} onDelete={deleteFile} />
      ))}
    </Root>
  );
};

export default ImageUpload;
