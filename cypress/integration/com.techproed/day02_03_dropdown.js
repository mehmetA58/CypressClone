describe("dropdown", () => {
  it("dropdown test", () => {
    cy.visit("https://the-internet.herokuapp.com/dropdown");
    //*select option 1
    cy.get("#dropdown").select("Option 1").should("have.value", "1");
    // cy.get("#dropdown").select("1");  bu sekilde de oluyor
    //*select option 2
    cy.get("#dropdown").select("Option 2").should("have.value", "2");
    //cy.get("#dropdown").select("2");
  });
});

