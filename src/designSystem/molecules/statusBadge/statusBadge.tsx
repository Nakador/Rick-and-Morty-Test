import React from 'react';
import { Flex } from '../../atoms/flex/flex';
import { StatusDot } from './statusBadge.styles';
import { Text } from '../../atoms/text/text';

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  status: string;
  species: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  status, 
  species, 
  id = 'status-badge',
  ...props 
}) => {
  return (
    <Flex align="center" gap="0.5rem" id={id} data-testid={id} {...props}>
      <StatusDot status={status} />
      <Text size="sm" color="text">
        {status} - {species}
      </Text>
    </Flex>
  );
};
