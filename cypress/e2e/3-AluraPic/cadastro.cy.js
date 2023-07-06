describe('Cadastro de usuarios alura pic', () => {
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

    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuarios => {
        it('Registrar usuario', + usuarios.email, () => {
            cy.get('input[formcontralname="email"]').type(usuarios.email);
            cy.get('input[formcontrolname="fullName"]').type(usuarios.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuarios.userName);
            cy.get('input[formcotrolname="password"]').type(usuarios.password);
            cy.contains('button', 'Register').click();

        })


    })


})