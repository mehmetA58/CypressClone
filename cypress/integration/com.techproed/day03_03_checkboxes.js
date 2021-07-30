describe("checkboxes", () => {
  it.skip("checking single box", () => {
    //it.skip : bu testi calistirmadan gec/atla
    cy.visit("http://automationpractice.com/index.php");
    cy.get(".sf-with-ul").first().click(); //Tops Webelementi  locator uzun oldugu icin ilkini tikla

    //*tiklanmadigini test etme
    cy.get("#layered_category_4").should("not.be.checked");

    // should("not.be.checked") -> element tiklanmadiysa true return eder, isretlenmedigini test eder

    //*tikla
    cy.get("#layered_category_4").check();

    //*tiklandigini test etme
    cy.get("#layered_category_4").should("be.checked");

    //.should("be.checked") -> tiklandiysa true return eder

    //*tiklanmayi kaldirma ve tiklanmadigini da test etme
    cy.get("#layered_category_4").uncheck().should("not.be.checked");

    //uncheck() -> tiklanmayi kaldirir
  });

  it.skip("check all checkboxes", () => {
    //it.only : skip yerine only olursa sadece bu testi calistir demektir
    cy.visit("http://automationpractice.com/index.php");
    cy.get(".sf-with-ul").first().click(); //Tops Webelementi

    //*butun kutulara tikla
    cy.get("input[type='checkbox']").check();
    cy.wait(3000);

    //*butun tikleri kaldiracak
    cy.get("input[type='checkbox']").uncheck();
  });

  it("click", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get(".sf-with-ul").first().click();

    cy.get("input[type='checkbox']").click({ multiple: true });

    //*click() -> tek elemente uygulanir
    //*click({ multiple: true }) -> birden fazla elemete uygulamak icin kullanilir

    //??Assertion
    //*1) secilen locator tiklanmis(checked) mi
    cy.get("input[type='checkbox']").first().should("be.checked"); //assertion

    //*2) ust Classta parent checked oldu mu
    cy.get("input[type='checkbox']")
      .first()
      .parent()
      .should("have.class", "checked");
      //should('have.class','container');

    //*3) should('have.id','username');
    //*4) should('have.type','text');
  });
});
