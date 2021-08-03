describe("hooks", () => {
  before(() => {
    console.log("BEFORE METHOD");
  });

  beforeEach(() => {
    console.log("BEFORE EACH METHOD");
    cy.visit("https://qa-environment.koalaresorthotels.com/");
  });
  after(() => {
    console.log("AFTER METHOD");
  });

  afterEach(() => {
    console.log("AFTER EACH METHOD");
    cy.url().should("include", "/Account/Logon");
  });

  it("test 1", () => {
    cy.contains("Log in").click();
  });
});

// ??  dashboard cypress : cloud da kaydedip daha fazla raporu inceleme yapiyor
// !  https://dashboard.cypress.io/login  sitesine kayit yapip id ve bu programa yukleme komutu alip baglanti sagliyoruz testlerin hepsini oraya aktariyoruz..
/*
{
   "projectId": "fo5tgr"
}
bu id yi cypress.json a yapistir


komut butun testler icin :  
1.  npx cypress run --spec cypress/integration/com.techproed/*.js--record --key 31a0e69e-ba6e-475c-a126-e8c7072d00cb   
2.  ./node_modules/.bin/cypress run --spec cypress/integration/com.techproed/day06_hooks.js --record --key 31a0e69e-ba6e-475c-a126-e8c7072d00cb  
2. secenek calismiyor  

komut tek test icin : npx cypress run --spec cypress/integration/com.techproed/day06_02_hooks.js --record --key 31a0e69e-ba6e-475c-a126-e8c7072d00cbseklinde terminale yapistir

*/
