///<reference types="cypress" />



describe('testes do exercicio', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    afterEach(() => {
        cy.wait(3000)
    })

    it('Adicionar contato', () => {
            cy.get('[type="text"]').type('João')
            cy.get('[type="email"]').type('jlubawaski@gmail.com')
            cy.get('[type="tel"]').type('47997803705')
            cy.get('.adicionar').click()
            cy.contains('João').should('exist')
    })

    it('Editar contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type(' Lubawaski')
        cy.get('.alterar').click()
        cy.contains('João Lubawaski').should('exist')

    })

    it('Excluir contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.contains('João Lubawaski').should('not.exist')
    })
})