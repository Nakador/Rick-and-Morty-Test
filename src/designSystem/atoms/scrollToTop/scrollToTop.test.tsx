import { render, screen, fireEvent } from '@testing-library/react';

import { ScrollToTop } from './scrollToTop';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';
import userEvent from '@testing-library/user-event';

describe('Feature: ScrollToTop Component', () => {
  beforeAll(() => {
    // Mock window.scrollTo
    Object.defineProperty(window, 'scrollTo', {
      value: jest.fn(),
      writable: true,
    });
  });

  describe('Scenario: Initial State', () => {
    test('Given the page is at the top, When the ScrollToTop component is rendered, Then it should be hidden initially', () => {
      const { container } = render(<ScrollToTop />, { wrapper: TestWrapper });

      expect(container).toBeInTheDocument();
      const button = screen.getByTestId('scroll-to-top');
      expect(button).not.toBeVisible();
    });
  });

  describe('Scenario: Scrolling Behavior', () => {
    test('Given the page is scrolled down, When the scroll threshold is exceeded, Then the button should become visible', () => {
      render(<ScrollToTop />, { wrapper: TestWrapper });
      
      Object.defineProperty(window, 'scrollY', { value: 400, writable: true });
      fireEvent.scroll(window); // fireEvent is still appropriate for window events like scroll

      const button = screen.getByTestId('scroll-to-top');
      expect(button).toBeVisible();
    });
  });

  describe('Scenario: Interaction', () => {
    test('Given the button is visible, When it is clicked, Then it should scroll the window to the top smoothly', async () => {
      const user = userEvent.setup();
      Object.defineProperty(window, 'scrollY', { value: 400, writable: true });
      render(<ScrollToTop />, { wrapper: TestWrapper });
      
      const button = screen.getByTestId('scroll-to-top');
      // Ensure button is visible/interactable before clicking
      // In JSDOM, if opacity is 0 or display none it might throw.
      // Assuming CSS handles visibility or conditional rendering.
      
      await user.click(button);

      expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
  });
});
