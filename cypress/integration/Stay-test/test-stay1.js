describe('Тестирование staya', function () {
   it('Позитивный кейс: верный логин, верный пароль', function () {
       cy.visit('https://staya.dog/');

       cy.get('.header-bottom__right--link').click();
       cy.get('.auth-form > form > [type="email"]').type('ввести верный email');
       cy.get('.auth-form > form > [type="password"]').type('ввести верный пароль');
       cy.get('.auth-form__submit > .s-button__content').click();

       cy.contains('Мои заказы');    
       
       cy.get('button.profile__nav-link').click({ multiple: true });
       cy.get('.box__button_ok').click({ multiple: true });
       })
})