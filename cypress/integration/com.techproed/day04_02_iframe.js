import "cypress-iframe";
//??cypress runner in iframe ile iletisime gecmesi icin gerekli olan kodlari tanimlar
describe("iframe", () => {
  it("iframe test", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.get("h3").should("contain", "Editor");

    cy.frameLoaded("#mce_0_ifr");
    //**frameLoaded("cssSelector"); iframe in yerini tanimliyoruz, iframe i yukle
    //driver.switchTo().frame(locator); //selenyum da

    cy.iframe().find("p").clear();
    //* iframe() : iframe e git, find("p") : find ile p tag ini bul, clear() : temizle

    cy.iframe().find("p").type("Hello World Hi Ahmet");

    cy.get(".large-4 > div > a")
      .should("contain.text", "Elemental Selenium")
      .click();
    //diger sayfaya geciyor cypress runner disina cikiyor - 

    //***dezavantaj : Cypess runner tek sekmede calisir
    
  });
});
