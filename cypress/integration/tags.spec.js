describe("Bookmarks", function() {
    beforeEach(function() {
      cy.task("resetDb")
      cy.visit('/')
    })
  
    it("Creates a new bookmark with tags and shows all bookmarks", function() {
      cy.get('#url').type("www.bbc.com")
      cy.get('#tags').type("news uk")
      cy.get('#submit-button').click()
      cy.get('#bookmarks').should("contain", "news")
      cy.get('#bookmarks').should("contain", "uk")
    })
  })