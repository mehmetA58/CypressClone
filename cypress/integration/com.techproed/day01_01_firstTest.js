describe("My First Test", () => {
  //*describe ('test ismi' , 'test icin olusturulacak fonksiyonlar ')
  it("URL Testi", () => {
    //* testi tanimliyoruz @Test gibi..
    //*it('Testin ismi','test icin olusturulacak fonksiyonlar')

    //URL adresinden google var mi?

    cy.visit("https://www.google.com.tr/"); // my-cypress-framework ara yuzune gidip testin oldugu klasoru tıkla yani run et  //seleniumdaki get()
    //*visit ('site adresi') siteye gider

    cy.url().should("include", "com", "//");
    cy.url().should("include", "com");
    cy.url().should("include", "www.google.com");
    //* url () : url testi icin kullanilir
    //*should('iceriyor mu', 'xxxx')
  });

  //describe’dan sonra test suite ismini, it’den sonra ise test case ismini belirliyoruz
  //'My First Test' -> intelij deki class ismi gibi   it -> @Test

  //?? 2. Test olusturma

  it("Title Test", () => {
    //Title da Google Var mi?
    cy.visit("https://www.google.com/");
    cy.title().should("eq", "Google"); //Google in type da  Google case sensitive
  });
});
