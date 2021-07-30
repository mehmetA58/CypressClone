describe("multiple windows", () => {
  //! 1.yontem
  it("removing target", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.wait(3000);
    cy.get(".example > a").invoke("removeAttr", "target").click();
    //hedefi yani olan sekmeyi kaldirarak cagir  (yeni sekmeyi cagir)

    //*invoke('removeAttr', 'Attribute name')
    //*attribute siliyor, yeni sekmeyi acmiyor, tiklandiginda ayni sekmede aciliyor

    cy.get("h3").should("have.text", "New Window");
  });

  //! 2.yontem
  it("yeni urlde acma", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.wait(3000);

    //  prop() : JQuery de bir method, Attribute degerini aliyor
    //  prop() ile 'href' degerini aldik (deger : Window/new)
    cy.get(".example > a").then((element) => {
      const newURL = element.prop("href");
      cy.visit(newURL);
    });

    cy.get("h3").should("have.text", "New Window"); //testin icinde methodun disinda
  });

  
});
