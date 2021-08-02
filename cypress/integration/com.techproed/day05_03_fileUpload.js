describe("file upload", () => {
  it.skip("tek dosya yukleme", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

    //*1.yol
    //cy.get("#filesToUpload").attachFile("image01.jpeg");  //dosya yuklendi

    //*2.yol
    const path1 = "image01.jpeg";
    cy.get("#filesToUpload").attachFile(path1);

    //Assertion
    //1
    cy.contains("image01.jpeg").should("be.visible");

    //2
    cy.get("#fileList > li").should("include.text", "image01.jpeg"); //locator ile
  });
  it("coklu dosya yukleme - 1.yontem", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

    const path1 = "image01.jpeg";
    const path2 = "image02.jpeg";
    const path3 = "image03.jpeg";

    /*
    cy.get("#filesToUpload")
      .attachFile(path1)
      .wait(3000)
      .attachFile(path2)
      .wait(3000)
      .attachFile(path3)
      .wait(3000);

   */
    //ya da 2.yontemden yola cikarak asagidaki sekilde de olur.. ..

    cy.get("#filesToUpload").attachFile([path1, path2, path3]);
  });

  it("coklu dosya yukleme - 2.yontem", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

    cy.get("#filesToUpload").attachFile([
      "image01.jpeg",
      "image02.jpeg",
      "image03.jpeg",
    ]);
  });

  it.only("override fileName", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    const path1 = "image01.jpeg";
    // cy.get("#filesToUpload").attachFile({filePath: path1, fileName: "image02.jpeg" });
    cy.get("#filesToUpload").attachFile({
      filePath: path1,
      fileName: "deneme.pdf",
    });

    //Assertion
    //1.yol
    cy.contains("image.jpeg").should("be.visible");
    
    //2.yol
    cy.get("#fileList > li").contains("image0.jpeg").should("be.visible");
  });
});
