import React, { FC } from 'react';
import Root from './Root';
import Description from './Description';
import Wrapper from './Wrapper';
import Label from '@/components/common/Label';
import Restrictions from '@/components/common/Restrictions';
import LabelText from '@/components/common/LabelText';
import Error from '@/components/common/Error';
import Typography from '@/components/common/Typography';
import Color from '@/helpers/constants/Color';

type linkInfo = {
  text: string;
  to: string;
};

interface Props {
  name: string;
  required: boolean;
  info?: string;
  maxLength?: number;
  error?: string;
  placeholder: string;
  value: string;
  as?: 'textarea' | string;
  padding?: number;
  onChange: (value: string) => void;
  alternativeStrict?: string;
  linkInfo?: linkInfo;
}

/**
 * Input component.
 */
const Input: FC<Props> = ({
  name,
  error,
  placeholder,
  required,
  info,
  value,
  maxLength,
  onChange,
  as,
  padding,
  alternativeStrict,
  ...props
}) => {
  const inputRef = React.createRef<HTMLInputElement & HTMLTextAreaElement>();
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    onChange && onChange(e.target.value);
  };
  // const Component = as ? Description : Root;
  const restrictions = maxLength || alternativeStrict;
  const overLength = maxLength ? value.length > maxLength : false;

  return (
    <div>
      <Label>
        {info && (
          <LabelText required={required}>
            <Typography opacity={0.8} color={error ? Color.red : Color.darkGray}>
              {info}
            </Typography>
          </LabelText>
        )}
        {restrictions && (
          <Restrictions>
            {alternativeStrict ? (
              <Typography opacity={0.3} color={Color.darkGray}>
                {alternativeStrict}
              </Typography>
            ) : (
              <Typography opacity={overLength ? 1 : 0.3} color={overLength ? Color.red : Color.darkGray}>
                {`${value.length}/${maxLength}`}
              </Typography>
            )}
          </Restrictions>
        )}
      </Label>
      <Wrapper>
        {as ? (
          <Description
          value={value}
          error={(error && error.length > 0) || overLength}
          placeholder={placeholder}
          ref={inputRef}
          onChange={onInputChange}
          padding={padding}
          name={name}
        />
        ) : (
          <Root
          value={value}
          error={(error && error.length > 0) || overLength}
          placeholder={placeholder}
          ref={inputRef}
          onChange={onInputChange}
          padding={padding}
          name={name}
          type="text"
        />
        )}


        {error && <Error error={error} target={inputRef} />}
      </Wrapper>
    </div>
  );
};

export { Props as InputProps };
export default Input;
