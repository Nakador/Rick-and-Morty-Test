import React from 'react';
import { Button } from '../../atoms/button/button';
import { PaginationContainer } from './pagination.styles';
import { Text } from '../../atoms/text/text';

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  id = 'pagination',
  ...props
}) => {
  return (
    <PaginationContainer justify="center" align="center" gap="1rem" id={id} {...props}>
      <Button onClick={onPrev} disabled={!hasPrev}>
        Previous
      </Button>
      <Text color="text">
        Page {currentPage} of {totalPages}
      </Text>
      <Button onClick={onNext} disabled={!hasNext}>
        Next
      </Button>
    </PaginationContainer>
  );
};
