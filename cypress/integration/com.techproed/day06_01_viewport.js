describe("view ports", () => {
  it("iphone8", () => {
    cy.visit("https://www.amazon.com/");
    cy.viewport("iphone-8");
    cy.screenshot;
  });
  it("imac", () => {
    cy.visit("https://www.amazon.com/");
    cy.viewport("macbook-16");
    cy.screenshot;
  });

  it("custom", () => {
    cy.visit("https://www.amazon.com/");
    cy.viewport(2500, 1500);
    cy.screenshot;
  });
});
/*
Default sizing
By default, until you issue a cy.viewport() command, Cypress sets the width to 1000px and the height to 660px by default.
{
  "viewportWidth": 1000,
  "viewportHeight": 660
}
*/
///port: test yapilan ekran boyutunun ayari- web sayfasinin farkli cihazlardaki gorunum buyuklugunu ayarliyoruz

/*
{
  "chromeWebSecurity": false
}

guvenlik sebebiyle acilmayan sayfalari ignore edip, bu kod ile her halukarda ac diyoruz 
*/
