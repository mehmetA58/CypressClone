describe("XHR - XML, HTTP, Request", () => {
  //* XHR : JavaScript ile sunulmus bir API, web sitesini es zamanli olarak arka planda calisan olaylari takip eder
  const requestUrl = "https://jsonplaceholder.cypress.io/comments";

  it("XHR Example 1", () => {
    cy.request(requestUrl).should((response) => {
      console.log(response);  //browser da arka planda oldu..(API) sayfaya sag tikla incele de sonra console a git..

      assert.equal(response.status, 200);

      assert.equal(response.statusText, 200);  //1.yol
      //expect(response.statusText).to.eq('OK')  //2.yol



    });
  });
});
