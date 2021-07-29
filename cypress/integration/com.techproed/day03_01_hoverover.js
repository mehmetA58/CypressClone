describe("hover over", () => {
  it("move over", () => {
    cy.visit("https://www.amazon.com/");
    cy.get(".icp-nav-link-inner > .nav-line-2 > .nav-icon").trigger(
      "mouseover"
    ); //bayraktaki ok kismina basilir
    //*trigger : mouse i hareket ettirir- once get() sonra trigger() click e gerek kalmiyor
    //*mouseover : yazilan locatore dogru mouse i hareket ettir demektir

    //change country/region
    cy.contains("Change country/region").click();

    //select Canada
    //cy.get('.a-dropdown-prompt').select('Canada')
    /*
    
        <span class="a-dropdown-prompt">United States</span>
        yukaridaki locater bu tag icerinde geciyor.
        Ancak cy.select() kodu kullanirken locaterlarin <span></span>
        icerinde olmamasi lazim.
        */
    cy.get("#icp-selected-country").select("Canada", { force: true });
    cy.wait(6000);
    //dropdown elementleri acmak icin kullaniyoruz
  });
});

/*select Canada
cy.get("#a-autoid-0-announce").click();
cy.get(
  "#icp-selected-country_2 > .a-fixed-left-grid > .a-fixed-left-grid-inner > .a-col-left > .icp-flag-icon-2"
).click();
cy.get(".a-button-input").click();
*/
// locate ederken dropdownda acamazsa select yoktu bu ornekte uyari verdi ondan manual olarak parenta gittik ilk
// select buldugumuz yerde id yi aldik.
