describe('Details Page Story', () => {
  const baseUrl = 'http://localhost:6006/iframe.html';

  it('should display loading state', () => {
    cy.visit(`${baseUrl}?id=pages-detailspage--loading&viewMode=story`);
    cy.get('div').should('exist');
  });

  it('should render character details correctly', () => {
    cy.visit(`${baseUrl}?id=pages-detailspage--success&viewMode=story`);

    // Verify Name
    cy.contains('Rick Sanchez').should('be.visible');

    // Verify Attributes
    cy.contains('Earth (C-137)').should('be.visible');
    cy.contains('Citadel of Ricks').should('be.visible');
  });

  it('should handle back button navigation', () => {
    cy.visit(`${baseUrl}?id=pages-detailspage--success&viewMode=story`);

    cy.contains('← Back to Listing').should('be.visible').should('have.attr', 'href', '/');
  });

  context('Mobile View', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
    });

    it('should display correctly on mobile', () => {
      cy.visit(`${baseUrl}?id=pages-detailspage--success&viewMode=story`);

      cy.contains('Rick Sanchez').should('be.visible');
      cy.get('img').should('be.visible');
      cy.contains('← Back to Listing').should('be.visible');
    });
  });
});
