describe("custom method", () => {
  it.skip("login", () => {
    cy.login("123murat123@gmail.com", "123murat123");
    //*login ->support klasorunde commands.js de tanimlanan method
    //commands.js de tanimlandigi icin framework un her yerinden ulasabiliriz
  });
  it("negative Login", () => {
    cy.login("123murat12@gmail.com", "123murat123");

    //Assertion
    //1
    cy.contains("Authentication failed").should("be.visible");
    //2
    //url :http://automationpractice.com/index.php?controller=authentication
    cy.url().should("include", "controller=authentication");
    //3
    cy.screenshot(); //framework de screenshot klasorune gider
  });
});
