describe('Listing Page Story', () => {
  const baseUrl = 'http://localhost:6006/iframe.html';

  it('should display loading state', () => {
    cy.visit(`${baseUrl}?id=pages-listingpage--loading&viewMode=story`);
    cy.get('div').should('exist');
  });

  it('should render character list correctly', () => {
    cy.visit(`${baseUrl}?id=pages-listingpage--success&viewMode=story`);

    // Verify Rick Sanchez is present
    cy.contains('Rick Sanchez').should('be.visible');

    // Verify Morty Smith is present
    cy.contains('Morty Smith').should('be.visible');
  });

  context('Desktop View', () => {
    beforeEach(() => {
      cy.viewport(1024, 768); // Desktop
    });

    it('should display filter bar and pagination', () => {
      cy.visit(`${baseUrl}?id=pages-listingpage--success&viewMode=story`);

      // Check for Filter Bar elements
      cy.get('input[placeholder="Search by name..."]').should('be.visible');

      // On Desktop, the Toggle Button should be hidden
      cy.contains('button', 'Filters').should('not.be.visible');

      // But the filters themselves should be visible
      cy.get('select').should('be.visible');

      // Check for Pagination
      cy.get('button').contains(/next/i).should('exist');
      cy.get('button').contains(/prev/i).should('exist');
    });
  });

  context('Mobile View', () => {
    beforeEach(() => {
      cy.viewport('iphone-6'); // Mobile
    });

    it('should toggle filters on mobile', () => {
      cy.visit(`${baseUrl}?id=pages-listingpage--success&viewMode=story`);

      // On Mobile, the Toggle Button should be visible
      cy.contains('button', 'Filters').should('be.visible').click();

      // Filters should now be visible
      cy.get('select').should('be.visible');

      // Toggle again to hide
      cy.contains('button', 'Hide Filters').click();
      cy.get('select').should('not.be.visible');
    });
  });

  context('Integration (Real App)', () => {
    beforeEach(() => {
      // Visit the real app root
      cy.visit('/');
      cy.viewport(1024, 768);
    });

    it('should update URL when searching by name', () => {
      const searchTerm = 'Rick';
      cy.get('input[placeholder="Search by name..."]').type(searchTerm);

      cy.wait(600); // Wait for debounce

      cy.url().should('include', `name=${searchTerm}`);
    });

    it('should update URL when filtering by status', () => {
      const status = 'Alive';
      cy.get('select[aria-label="Filter by status"]').select(status);

      cy.url().should('include', `status=${status}`);
    });

    it('should update URL when sorting', () => {
      const sort = 'asc';
      cy.get('select[aria-label="Sort characters"]').select(sort);

      cy.url().should('include', `sort=${sort}`);
    });
  });
});
