import { render, screen } from '@testing-library/react';

import { Pagination } from './pagination';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';
import userEvent from '@testing-library/user-event';

describe('Feature: Pagination Component', () => {
  describe('Scenario: Rendering State', () => {
    test('Given current page and total pages, When the component is rendered, Then proper page info should be displayed', () => {
      const currentPage = 1;
      const totalPages = 5;

      render(
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={jest.fn()}
          onPrev={jest.fn()}
          hasNext={true}
          hasPrev={false}
        />,
        { wrapper: TestWrapper }
      );

      expect(screen.getByText(`Page ${currentPage} of ${totalPages}`)).toBeInTheDocument();
    });

    test('Given first page, When rendered, Then "Previous" button should be disabled', () => {
      render(
        <Pagination
          currentPage={1}
          totalPages={5}
          onNext={jest.fn()}
          onPrev={jest.fn()}
          hasNext={true}
          hasPrev={false}
        />,
        { wrapper: TestWrapper }
      );

      const prevButton = screen.getByRole('button', { name: /previous/i });
      expect(prevButton).toBeDisabled();
    });
  });

  describe('Scenario: Interaction', () => {
    test('Given "Next" is enabled, When user clicks "Next", Then onNext handler should be called', async () => {
      const user = userEvent.setup();
      const onNext = jest.fn();
      render(
        <Pagination
          currentPage={1}
          totalPages={5}
          onNext={onNext}
          onPrev={jest.fn()}
          hasNext={true}
          hasPrev={false}
        />,
        { wrapper: TestWrapper }
      );

      const nextButton = screen.getByRole('button', { name: /next/i });
      await user.click(nextButton);

      expect(onNext).toHaveBeenCalledTimes(1);
    });
  });

  describe('Scenario: Identification', () => {
    test('Given a custom id, When the component is rendered, Then it should have the correct id and test-id', () => {
      const customId = 'my-pagination';
      render(
        <Pagination
          id={customId}
          currentPage={1}
          totalPages={5}
          onNext={jest.fn()}
          onPrev={jest.fn()}
          hasNext={true}
          hasPrev={false}
        />,
        { wrapper: TestWrapper }
      );

      const element = screen.getByTestId(customId);
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute('id', customId);
    });
  });
});
