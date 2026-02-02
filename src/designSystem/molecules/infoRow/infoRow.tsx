import React from 'react';
import { Box } from '../../atoms/box/box';
import { Text } from '../../atoms/text/text';
import { ValueContainer, Label } from './infoRow.styles';
import { isString } from '../../../app/utils/typeGuards/typeGuards';

export interface InfoRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | React.ReactNode;
}

export const InfoRow: React.FC<InfoRowProps> = ({ 
  label, 
  value, 
  id = 'info-row',
  ...props 
}) => {
  return (
    <Box margin="0 0 1.5rem 0" id={id} data-testid={id} {...props}>
      <Label size="sm" color="textSecondary">
        {label}
      </Label>
      <ValueContainer>
        {isString(value) ? <Text>{value}</Text> : value}
      </ValueContainer>
    </Box>
  );
};
