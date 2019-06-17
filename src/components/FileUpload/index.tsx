import React, { FC } from 'react';
import Input from './Input';
import FileLabel from './FileLabel';
import Root from './Root';
import UploadImg from './UploadImg';
import Typography from '@/components/common/Typography';
import LabelText from '@/components/common/LabelText';
import Label from '@/components/common/Label';
import DeleteButton from '@/components/common/DeleteButton';
import Error from '@/components/common/Error';
import Restrictions from '@/components/common/Restrictions';
import Color from '@/helpers/constants/Color';
import { InputProps } from '@/components/Input';

interface Props extends Omit<InputProps, 'value' | 'onChange'> {
  maxFileSizeMB: number;
  fileFormat: string[];
  id: number;
  multiple: boolean;
  onChange?: (files: File[]) => void;
  onDelete?: () => void;
  files: File[];
  error: string;
  alternativeStrict?: string;
}

const FileUpload: FC<Props> = props => {
  const errorTarget = React.createRef<HTMLLabelElement>();

  const checkSize = (sizeBytes: number) => {
    const { maxFileSizeMB } = props;
    return sizeBytes < maxFileSizeMB * 1024 * 1024;
  };

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const { onChange } = props;
    if (files) {
      const filteredFiles = Object.values(files).filter((file: File) => checkSize(file.size));
      const currentFiles = props.files;
      onChange && onChange([...filteredFiles, ...currentFiles]);
    }
  };

  const handleDelete = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { onDelete } = props;
    onDelete && onDelete();
  };

  const { name, required, error, info, placeholder, id, multiple, fileFormat, files, alternativeStrict } = props;

  const fileUploaded: boolean = files.length > 0 && !multiple;

  return (
    <div>
      <Label>
        <LabelText required={required}>
          <Typography opacity={0.8} color={error ? Color.red : Color.darkGray}>
            {info}
          </Typography>
        </LabelText>
        {alternativeStrict && (
          <Restrictions>
            <Typography opacity={0.3} color={Color.darkGray}>
              {alternativeStrict}
            </Typography>
          </Restrictions>
        )}
      </Label>
      <Root fileUploaded={fileUploaded} error={error.length > 0}>
        <FileLabel htmlFor={`fileUpload${id}`} ref={errorTarget}>
          <UploadImg fileUploaded={fileUploaded} />
          <Typography opacity={fileUploaded ? 1 : 0.3} color={fileUploaded ? Color.green : Color.darkGray}>
            {fileUploaded ? 'Uploaded' : placeholder}
          </Typography>

          {fileUploaded && <DeleteButton onClick={handleDelete} />}
        </FileLabel>
        {error && <Error error={error} target={errorTarget} />}
        <Input
          name={name}
          type="file"
          id={`fileUpload${id}`}
          onChange={handleFilesChange}
          multiple={multiple}
          accept={fileFormat.map((format: string) => `.${format},`).join('')}
        />
      </Root>
    </div>
  );
};

export { Props as FileUploadProps };
export default FileUpload;
