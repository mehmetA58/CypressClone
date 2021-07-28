describe("Login", () => {
  //const email = "qwert@gmail.com";
  //const psw = "qwert";

  const email = "cypress_test_1@gmail.com";
  const psw = "admin_123";

  it.skip("Login negatif", () => {
    //bu testi atlar

    cy.visit("https://test.iyikisordun.com/login.php");

    cy.get('[type="email"]').type(email);
    cy.get('[type="password"]').type(psw);
    cy.get(".btn").click();

    //*fail bekledigimiz durumlarda kullanilabilir..
    cy.get("#fail").should("include.text", "Girdiğiniz bilgiler hatalıdır");

    cy.get("#fail").should("be.visible"); //bu sekilde de olur
  });

  it("Login pozitif", () => {
    cy.visit("https://test.iyikisordun.com/login.php");

    cy.get('[type="email"]').type(email);
    cy.get('[type="password"]').type(psw);
    cy.get(".btn").click();
  });
});
