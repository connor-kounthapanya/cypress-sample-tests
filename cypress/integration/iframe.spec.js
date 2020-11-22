/// <reference types="Cypress" />

const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
                'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                'llamco laboris nisi ut aliquip ex ea commodo consequat. ' +
                'Duis aute irure dolor in reprehenderit in voluptate velit ' +
                'esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ' +
                'occaecat cupidatat non proident, sunt in culpa qui officia ' +
                'deserunt mollit anim id est laborum.'

function getIframeBody(selector) {
    return cy.get(selector)
             .its('0.contentDocument.body')
             .then(cy.wrap)
}

describe('Iframe Test', () => {
    it('Formats text', () => {
        cy.visit('http://the-internet.herokuapp.com/iframe')
        
        // Get rid of pop-up
        cy.get('#mceu_34')
          .click()

        // Type and select message
        getIframeBody('#mce_0_ifr')
          .clear()
          .type(message)
          .type('{selectall}')

        // Open format menu
        cy.get('#mceu_22')
          .click()
        
        // Select inline
        cy.get('#mceu_37')
          .trigger('mouseover')

        // Select bold
        cy.get('#mceu_41')
          .click()

        // Assert correct formating
        getIframeBody('#mce_0_ifr')
          .contains('strong', message)
    })
})
