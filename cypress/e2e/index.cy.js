describe('Portfolio navigation', () => {
  it('renders the main heading, navigation, and welcome section', () => {
    cy.visit('/');

    cy.contains('h1', 'My Portfolio').should('be.visible');
    cy.contains('nav a', 'Home').should('be.visible');
    cy.contains('nav a', 'Writing').should('be.visible');
    cy.contains('nav a', 'Apps').should('be.visible');
    cy.contains('nav a', 'Workbench').should('be.visible');
    cy.contains('nav a', 'Creative').should('be.visible');
    cy.contains('nav a.active', 'Home').should('be.visible');
    cy.contains('h2', 'Welcome').should('be.visible');
    cy.contains('p', 'This is a simple portfolio layout').should('be.visible');
  });

  it('marks the current page link as active', () => {
    cy.visit('/writing.html');

    cy.contains('nav a.active', 'Writing').should('be.visible');
  });
});
