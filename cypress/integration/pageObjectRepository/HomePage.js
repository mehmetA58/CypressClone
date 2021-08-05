class HomePage {
  getSignInLink() {
    return cy.contains("Sign In");
  }
}

export default HomePage;

//buradaki export eklenmezse HomePage i default constructor olarak gormez ve buraya erisemez
