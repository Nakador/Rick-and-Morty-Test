import { ApiError } from './errors';

describe('Feature: ApiError Class', () => {
  describe('Scenario: Instantiation', () => {
    test('Given a message and status, When an ApiError is created, Then it should have the correct properties', () => {
      const message = 'Not Found';
      const status = 404;

      const error = new ApiError(message, status);

      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(ApiError);
      expect(error.message).toBe(message);
      expect(error.status).toBe(status);
      expect(error.name).toBe('ApiError');
    });
  });
});
