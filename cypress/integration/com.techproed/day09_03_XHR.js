describe("XHR - XML, HTTP, Request", () => {
  it("XHR Example 3", () => {
    cy.visit("https://example.cypress.io/commands/waiting");
    cy.intercept("GET", "**/comments/*") //link de oncesi ve sonrasini kabul et demek --network u dinle..
      .as("getComment"); // as ->degisken atiyor, daha sonrabu degiskeni kullanmak istersek @ isareti ile kullanilir

    cy.get(".network-btn").click();
    cy.wait("@getComment")
      .its("response")
      .then((response) => {
        console.log(response);

        assert.equal(response.statusCode, 200, "status Code Control ");
      });
  });
});
