import React, { FC } from 'react';

import Typography from '@/components/common/Typography';
import Root from './Root';

interface Props {
  data: {
    primaryText: string;
    username: string;
    secondaryText: string;
  };
}

/**
 * Greetings component in the top of screen.
 */
const Greetings: FC<Props> = ({ data: { primaryText, username, secondaryText }, ...props }) => (
  <Root {...props}>
    <div>
      <Typography size={24} weight={500}>
        {primaryText.concat(' ', username, '!')}
      </Typography>
    </div>
    <div>
      <Typography size={18} weight={500}>
        {secondaryText}
      </Typography>
    </div>
  </Root>
);

export default Greetings;
