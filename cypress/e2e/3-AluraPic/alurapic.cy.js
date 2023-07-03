describe('Login e registro de usuarios alura pic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')

    })
    it('verifica mensajens validação', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verifica mensajens de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('Zadys');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');

    })


    it('verifica mensajens de user name invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('Za');
        cy.contains('button', 'Register').click();
        //cy.contains('ap-vmessage', 'Minimun length is 2').should('be.visible');
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');

    })

    it('verifica mensajens de password invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');

    })
    it.only('fazer login valido', () => {
        cy.login('flavio', '123')

    })
    it.only('Registrar usuario', () => {
        cy.resgister('sadica2007@gmail.com', 'Elena Lopez', 'elena', '12345678')

    })
})

