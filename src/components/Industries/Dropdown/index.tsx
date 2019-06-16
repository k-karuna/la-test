import React, { FC } from 'react';
import Root from './Root';
import Item from './Item';
import Highlighted from './Highlighted';
import Typography from '@/components/common/Typography';

interface Props {
  industries: string[];
  onClick: (value: string) => void;
  highlighted?: number;
}

const Dropdown: FC<Props> = ({ industries, onClick, highlighted = 0 }) => {
  const highlight = (industry: string) => (
    <Highlighted>
      <Typography size={14}>{industry.substr(0, highlighted)}</Typography>
    </Highlighted>
  );

  return (
    <Root>
      {industries.map((industry, index) => (
        // tslint:disable-next-line: jsx-no-lambda
        <Item key={index} onClick={() => onClick(industry)}>
          {highlight(industry)}
          <Typography size={14}>{industry.substr(highlighted, industry.length)}</Typography>
        </Item>
      ))}
    </Root>
  );
};

export default Dropdown;
