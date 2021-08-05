import HomePage from "../pageObjectRepository/HomePage";
import LoginPage from "../pageObjectRepository/LoginPage";

/ <reference types="Cypress" / >
  describe("Paylinn Bank", () => {
    before(function () {
      cy.fixture("creds").then(function (data) {
        //datalari fixture klasorunde creds.json dan alacak
        this.data = data;
      });
    });
    it("paylinn login test", function () {
      //?? homePage object olusturma
      const homePage = new HomePage();

      //?? loginPage object olusturma
      const loginPage = new LoginPage();
      //* Url e git
      cy.visit("https://www.paylinn.com/");

      //*Sign In e click
      homePage.getSignInLink().click();

      //*username gir
      loginPage.getUserNameBox().type(this.data.username);

      //*username girildigini dogrula
      loginPage
        .getUserNameBox()
        .should("have.attr", "value", this.data.username);

      //*password gir
      loginPage.getPasswordBox().type(this.data.password);

      //*password girildigini dogrula
      loginPage
        .getPasswordBox()
        .should("have.attr", "value", this.data.password);

      //*submit e tikla
      loginPage.getLoginButton().click();

      //*giris yapildigini onayla
      loginPage.getWelcomeText().should("contain.text", "Welcome");

      //*giris yapildigini assert etme
      loginPage
        .getNavbarHeader()
        .should("contain.text", "Welcome")
        .and("contain.text", "React")
        .and("contain.text", "Logout")
        .and("contain.text", this.data.username);
    });
  });
