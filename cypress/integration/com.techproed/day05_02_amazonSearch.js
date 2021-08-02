describe("search", () => {
  it("amazon search", () => {
    // cy.amazonSearch("imac");
    cy.amazonSearch("iphone");
    // cy.get(".a-section > .a-color-state").should("have.text", '"imac"');
    cy.get(".a-section > .a-color-state").should("include.text", "iphone");
  });
});

//have.text icin "" tirnak koymak gerekiyor.  O yuzden include tercih ettim

