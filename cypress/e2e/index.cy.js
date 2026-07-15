describe('Portfolio navigation', () => {
  it('renders the main heading, navigation, and hero section', () => {
    cy.visit('/');

    cy.contains('h1', 'Karen McCrann').should('be.visible');
    cy.contains('nav a', 'Home').should('be.visible');
    cy.contains('nav a', 'Writing').should('be.visible');
    cy.contains('nav a', 'Apps').should('be.visible');
    cy.contains('nav a', 'Workbench').should('be.visible');
    cy.contains('nav a', 'Creative').should('be.visible');
    cy.contains('nav a.active', 'Home').should('be.visible');
    cy.contains('p', 'I build thoughtful tools').should('be.visible');
  });

  it('marks the current page link as active', () => {
    cy.visit('/writing.html');

    cy.contains('nav a.active', 'Writing').should('be.visible');
  });

  it('shows the LinkedIn link on the homepage', () => {
    cy.visit('/');

    cy.get('a[href*="linkedin.com/in/karen-m-b85bb5241"]').should('exist');
  });
});
