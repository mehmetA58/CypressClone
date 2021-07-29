describe("scroll", () => {
  it("scroll Into view", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");

    //*scrollIntoView() : sayfada locate edilen yere gider
    cy.get(".col-md-7 > .mb-4").scrollIntoView();
    cy.wait(3000);

    cy.get(
      ":nth-child(9) > .container > .justify-content-center > .col-md-7 > h2"
    ).scrollIntoView();
    cy.wait(3000);

    cy.get(".col-md-7 > h2 > span").scrollIntoView();

    cy.scrollTo("bottom"); //*sayfada en sona gider
    cy.scrollTo("top"); //*sayfada en basa gider

    cy.scrollTo(0, 1000); //*en bastan 1000 px asagiya iner
    cy.wait(3000);
    cy.scrollTo(0, -500); //*500 px yukari cikar
  });
});
