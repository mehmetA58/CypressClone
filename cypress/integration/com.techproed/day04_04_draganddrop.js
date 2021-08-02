import "@4tw/cypress-drag-drop";

describe("drag and drop", () => {
  it("double click", () => {
    cy.visit("https://www.testandquiz.com/selenium/testing.html");

    //* cift tiklama
    cy.get("#dblClkBtn").dblclick();

    //*sag tiklama
    cy.get("#dblClkBtn").rightclick();

    cy.on("window:alert", (str) => {
      //??Assertion

      //*1.yol
      expect(str).to.equal("hi, JavaTpoint Testing");

      //*2.yol
      expect(str).to.eq("hi, JavaTpoint Testing");

      //*3.yol
      expect(str).to.contains("hi, JavaTpoint Testing");
    });

    it("drag and drop", () => {
      // 1) Terminalden: npm install --save-dev @4tw/cypress-drag-drop
      // 2) import '@4tw/cypress-drag-drop'
      cy.visit("https://www.testandquiz.com/selenium/testing.html");
      cy.get("#sourceImage") // suruklenecek element
        .drag("#targetDiv"); //suruklenecegi yer
    });
  });
});

/*
///<reference types="cypress" />
Böyle bir kod blogu buldum internette, Kod sayfasına yapışırınca cypress ile ilgili kodları yazarken öneride bulunduğu yazıyordu.
*/
