import React, { FC } from 'react';
import Root from './Root';
import DeleteButton from '@/components/common/DeleteButton/index';
import Typography from '@/components/common/Typography';

interface Props {
  industry: string;
  onDelete: (industry: string) => void;
}

const SelectedIndustry: FC<Props> = ({ industry, onDelete }) => {
  const INDUSTRY_LIMIT_SYMBOLS = 12;
  const handleDelete = (e: React.SyntheticEvent, industry: string) => {
    e.preventDefault();
    onDelete && onDelete(industry);
  };
  return (
    <Root>
      <Typography size={14}>
        {industry.length > INDUSTRY_LIMIT_SYMBOLS ? `${industry.substr(0, INDUSTRY_LIMIT_SYMBOLS)}...` : industry}
      </Typography>
      <DeleteButton onClick={e => handleDelete(e, industry)} />
    </Root>
  );
};

export default SelectedIndustry;
