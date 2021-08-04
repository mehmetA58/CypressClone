describe("Paylinn Bank", () => {
  it("paylinn login test", () => {
    //* Url e git
    cy.visit("https://www.paylinn.com/");

    //*Sign In e click
    cy.contains("Sign In").click();
    //cy.get('[href="/login"] > .header__option > .header__lineTwo')  Sign In locator

    //*username gir
    cy.get(
      ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    ).type("User");

    //*password gir
    cy.get(
      ":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    ).type("user");

    //*submit e tikla
    cy.get(".MuiButton-label").click();

    //*giris yapildigini onayla
    cy.get(".header__nav > :nth-child(1) > .header__lineOne").should(
      "contain.text",
      "Welcome"
    );
  });
});

