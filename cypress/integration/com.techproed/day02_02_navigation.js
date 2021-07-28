describe("Navigation", () => {
  it.skip("back, forward,refresh", () => {
    //1.test
    //skip testi test blogunda calistirmaz (ignore gibi)
    cy.visit("https://qa-environment.koalaresorthotels.com/");

    cy.wait(4000);
    //4 saniye bekler

    cy.contains("Log in").click();

    //cy.go('back')
    // onceki sayfaya doner(1)
    cy.go(-1);
    // onceki sayfaya doner(2)
    cy.wait(2000);

    cy.go("forward");
    // sonraki sayfaya gider(1)
    cy.wait(2000);

    cy.go(1);
    // sonraki sayfaya gider(2)
    cy.wait(2000);

    cy.reload();
    //sayfayi tekrar yukler(refresh)
  });

  it("chain navigation", () => {
    //2.test zincirleme navigasyon
    cy.visit("https://qa-environment.koalaresorthotels.com/");

    cy.contains("Log in").click().go("back").go("forward").go("back");

    cy.reload(true).contains("Log in").should("be.visible");

    //reload(true) :tekrar yukle ------reload(false) :tekrar yukleme
  });
});
