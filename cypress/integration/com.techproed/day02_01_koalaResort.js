describe("Koala Resort Hotel", () => {
  it("Test 1", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");
    cy.contains("Log in").click();

    //??Assertion

    //*1.yol: include (url)
    cy.url().should("include", "Account/Logon");
    //url "Account/Logon" iceriyor mu

    //*2.yol: have.text (metin kutusu)
    cy.get("#navLogon > .nav-link").should("have.text", "Log in");
    //Login buton locator inda Log in text i yaziyor mu

    //*3.yol:be.visible
    cy.get(".row > .mb-4").should("be.visible");
    //Sayfadaki username ve password ustundeki Log in locator inda text var mi veya gorunur mu

    //*4.yol: eq
    cy.title().should("eq", "KoalaResortHotels - Log in");
    //sayfanin title i KoalaResortHotels - Log in  e esit mi

    //*5.yol: include.text
    cy.get(".row > .mb-4").should("include.text", "Log in");
    //locate edilen yerde 'Log in' text olarak var mi

    //??burada include ve have ayni sonucu verir
    //url => include   text => include or have.text
  });
});
