describe('Main navigation', () => {
  it('passes', () => {
    cy.visit('http://localhost:5100')
    cy.get('.row > :nth-child(1) > a').click();
    cy.get('.breadcrumb > :nth-child(1) > a').click();
    cy.get('ul > :nth-child(2) > a').click();
    cy.get(':nth-child(1) > a').click();
    cy.get('.row > :nth-child(1) > a').click();
    cy.get('p').click();
    cy.get('p').should('have.text', 'Id: 1Name: John LennonBand: The Beatles');
    cy.get('.active > a').click();
    cy.get('ul > :nth-child(2) > a').click();
    cy.get('section.container > :nth-child(2) > a').should('have.text', 'This link triggers a Server side routing 404');
    cy.get('section.container > :nth-child(2) > a').click();
    cy.get(':nth-child(1) > a').click();
    cy.get('h1').should('have.text', 'Musicians');
    cy.visit('http://localhost:5100/');
    cy.get('select').select('fr');
    cy.get('h1').click();
    cy.get('h1').should('have.text', 'Musiciens');
    cy.get('span').click();
    cy.get('span').should('have.text', 'Tous les musiciens');
    cy.get('select').select('en');
    cy.get('.row > :nth-child(1) > a').click();
    cy.get('.breadcrumb > :nth-child(1) > a').click();  
  })
})