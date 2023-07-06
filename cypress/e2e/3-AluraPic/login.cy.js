describe('Login de usuarios alura pic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')

    })
    it('Fazer login valido', () => {
        cy.login('flavio', '123')
        cy.contains('a', '(Logout)').should('be.visible');
    })
    it('Fazer login invalido', () => {
        cy.login('zadys', '1234')
        cy.on('windom:alert', (srt) => {
            expect(srt).to.equal('Invalid user name or password')
        })
    })
})