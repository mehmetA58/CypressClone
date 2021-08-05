describe("Koala Resort Hotel", () => {
  it("Test 1", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");
    //describe: fonksiyonu tanimlar
    //visit (): seleniumdaki get() methodu gibi adrese gider

    //* login
    //1.yol
    //cy.get('#navLogon > .nav-link').click();

    //2.yol
    cy.contains("Log in").click();
    //contains () : metni text olarak buluyor

    //username :Manager
    cy.get("#UserName").type("Manager");
    //selenium da; driver.findElement(By.cssSelector("#UserName"))

    //password :Manager1!
    cy.get("#Password").type("Manager1!");

    cy.get("#btnSubmit").click();
  });
});
