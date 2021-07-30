import "@4tw/cypress-drag-drop";

describe("drag and drop", () => {
  it("double click", () => {
    cy.visit("https://www.testandquiz.com/selenium/testing.html");
    
    //* cift tiklama
    cy.get("#dblClkBtn").dblclick();

    //*sag tiklama
    cy.get("#dblClkBtn").rightclick();



  });
});
