describe('Проверка авторизации', function () {

  it('Правильный логин и правильный пароль', function () {
       cy.visit('https://login.qa.studio');// зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru');// найти поле логин и ввести правильный логин
        cy.get('#pass').type('iLoveqastudio1');// найти поле пароль и ввести правильный пароль
        cy.get('#loginButton').click();// нажать войти
        cy.get('#messageHeader').should('be.visible');// найти поле с текстом успешной авторизации
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверить, что текст сообщения верный
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// проверить наличие крестика
    })

    it('Логика восстановления пароля', function () {
      cy.visit('https://login.qa.studio');// зайти на сайт
      cy.get('#forgotEmailButton').click();// нажать забыли пароль
      cy.get('#mailForgot').type('lana95p@mail.ru');// ввести почту
      cy.get('#restoreEmailButton').click();// нажать отправить код
      cy.get('#message').should('be.visible');// найти поле с текстом об отправке кода
      cy.get('#message').contains('Успешно отправили пароль на e-mail');// проверить, что текст сообщения верный
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');// проверить наличие крестика
    })

    it('Правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');// найти поле логин и ввести верный
        cy.get('#pass').type('iLoveqastudio');// найти поле пароль и ввести неверный
        cy.get('#loginButton').click();// нажать войти
        cy.get('#messageHeader').should('be.visible');// текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// проверить, что текст верный
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// проверить, что крестик есть
    })

    it('Неправильный логин и правильный пароль', function () {
      cy.visit('https://login.qa.studio');
      cy.get('#mail').type('lana95p@mail.ru');// найти поле логин и ввести неверный
      cy.get('#pass').type('iLoveqastudio1');// найти поле пароль и ввести верный
      cy.get('#loginButton').click();// нажать войти
      cy.get('#messageHeader').should('be.visible');// текст виден
      cy.get('#messageHeader').contains('Такого логина или пароля нет');// проверить, что текст верный
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');// проверить, что крестик есть
  })

  it('Валидация', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type('germandolnikov.ru');// найти поле логин и ввести его без @
    cy.get('#pass').type('iLoveqastudio1');// найти поле пароль и ввести верный
    cy.get('#loginButton').click();// нажать войти
    cy.get('#messageHeader').should('be.visible');// текст виден
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// проверить, что текст верный
})

it('Приведение к строчным буквам в логине', function () {
  cy.visit('https://login.qa.studio');// зайти на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru');// найти поле логин и ввести его с буквами разного регистра
        cy.get('#pass').type('iLoveqastudio1');// найти поле пароль и ввести правильный пароль
        cy.get('#loginButton').click();// нажать войти
        cy.get('#messageHeader').should('be.visible');// найти поле с текстом успешной авторизации
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверить, что текст сообщения верный
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// проверить наличие крестика
    })
})
