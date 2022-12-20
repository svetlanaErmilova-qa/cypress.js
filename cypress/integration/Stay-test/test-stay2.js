it('Негативный кейс: верный логин, неверный пароль', function () {
    cy.visit('https://staya.dog/');

    cy.get('.header-bottom__right--link').click();
    cy.get('.auth-form > form > [type="email"]').type('ввести верный email');
    cy.get('.auth-form > form > [type="password"]').type('ввести неверный пароль');
    cy.get('.auth-form__submit > .s-button__content').click();

    cy.contains('Невозможно войти с предоставленными учетными данными');
    
    cy.get('.header-bottom__right--link').click();
    })