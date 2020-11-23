/// <reference types="Cypress" />

describe('Drag and Drop Test', () => {
    it('Drags \'A\' to \'B\'', () => {
        cy.visit('http://the-internet.herokuapp.com/drag_and_drop')

        var dt = new DataTransfer

        cy.get('#column-a')
          .trigger('dragstart', {dataTransfer: dt})
        
        cy.get('#column-b')
          .trigger('drop', {dataTransfer: dt})

        cy.get('#column-a')
          .trigger('dragend')
          .should('have.text', 'B')

        cy.get('#column-b')
          .should('have.text', 'A')
    })
})
