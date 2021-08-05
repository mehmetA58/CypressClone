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
      "Welme"  
    );
  });
});
//2.testi hatali yaptik Welcome yerine -> "Welme" yazdik bilerek,  testler hatali olursa 2 defa daha tekrar et komutunu cypress.json da ekledik (retries- run mode :2 ) screen shots da 3 hata resmi cikti ilki kendininin sonraki 2 side 2 defaki tekrarin...
