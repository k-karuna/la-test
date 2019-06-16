import React, { FC } from 'react';
import Root from './Root';
import Color from '@/helpers/constants/Color';

interface Props {
  color?: Color;
  size?: number;
  fontStyle?: 'normal' | 'bold';
  lineHeight?: 'small' | 'big';
  weight?: number;
  opacity?: number;
}

const Typography: FC<Props> = ({
  color = Color.darkGray,
  size = 12,
  fontStyle = 'normal',
  lineHeight = 'small',
  opacity = 1,
  weight,
  ...rest
}) => (
  <Root
    color={color}
    size={size}
    weight={weight}
    fontStyle={fontStyle}
    opacity={opacity}
    lineHeight={lineHeight}
    {...rest}
  />
);

export { Props as TypographyProps };
export default Typography;
