describe("alerts", () => {
  it("alert test", () => {
    //Cypress otomatik olarak allert button tiklamalarini onaylar.
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get(":nth-child(1) > button").click();

    cy.get("#result").should("be.visible", "You successfully clicked an alert");
    cy.get("#result").should("have.text", "You successfully clicked an alert"); //ikisi de oluyor
  });

  it("accept alert test", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    //2. buttona tikliyoruz (Click for JS Confirm)
    //2 secenek cikiyor. iptal ve tamam
    //cypress otomatik olarak tamam’i kabul ediyor
    cy.get(":nth-child(2) > button").click();

    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it.only("dismiss alert test", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get(":nth-child(2) > button").click();
    //cypres otomatik olarak tamam butonuna tikladi
    //ama iptal butonunu secmek istiyoruz
    //browser controlu icin on() funksiyonu kullanacagiz
    //on()-> jquery bir fonksiyondur
    //window(object):confirm(functionality)

    cy.on("window:confirm", (str) => {
      return false;
      //return true -> default olarak tamam tikla demek
    });
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("entering text on the alert", () => {
    //3. buttom’a tikla (Click for JS Promt)
    //‘Hi’ yaz. Ok’e tikla
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window() //pop up pencereleri kontrol ediyoruz
      .then(($windowElement) => {
        cy.stub($windowElement, "prompt").returns("Hi");
        //$windowElement : prompt a bilgi girisi  ---stub :bilgiyi gonderir
        cy.wait(4000);
        cy.get(":nth-child(3) > button").click();
      });
    cy.get("#result").should("have.text", "You entered: Hi");
  });
});

// cy.get("#result").should("have.text", "You entered: null");
