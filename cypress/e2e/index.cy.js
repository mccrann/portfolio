describe('Portfolio homepage', () => {
  it('renders the main heading, navigation, and welcome section', () => {
    cy.visit('/');

    cy.contains('h1', 'My Portfolio').should('be.visible');
    cy.contains('nav a', 'About').should('be.visible');
    cy.contains('nav a', 'Projects').should('be.visible');
    cy.contains('nav a', 'Contact').should('be.visible');
    cy.contains('h2', 'Welcome').should('be.visible');
    cy.contains('p', 'This is a simple portfolio layout').should('be.visible');
  });
});
