describe("checkboxes", () => {
  it.skip("checking single box", () => {
    //skip : bu testi calistirmadan gec/atla
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
    //only : skip yerine only olursa sadece bu testi calistir demektir
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

    cy.get("input[type='checkbox']").should("be.checked"); //assertion

    
  });
});
