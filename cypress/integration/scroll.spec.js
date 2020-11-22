/// <reference types="Cypress" />

const NUM_LOOPS = 30

describe('Infinite Scroll Test', () => {
    it('Scrolls the div', () => {
        cy.visit('http://the-internet.herokuapp.com/infinite_scroll')
        
        cy.server()
        cy.route('/infinite_scroll/*').as('newChild')
        for (let i = 1; i <= NUM_LOOPS; i++) {
            cy.scrollTo('bottom')
              .wait('@newChild')
            cy.get('.jscroll-inner')
              .children()
              .should('have.length', i + 1)
        }
    })
})
