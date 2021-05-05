describe("Comments", function() {
    beforeEach(function() {
      cy.task("resetDb")
      cy.task("seedDb")
      cy.visit('/bookmarks')
    })
  
    it("A bookmark has comments that have timestamps", function() {
      cy.get('#bookmark-0-add-comment').click()
      cy.get('#comment-textbox').type("so great!")
      cy.get('#comment-submit').click()
      cy.get('#bookmark-0-comment-1').should('contain', 'so great!')
    })
  
    it("A comment has a commented at", function() {
      cy.get('#bookmark-0-comment-0').should('contain', 'commented at 10:30 3-5-2021')
    })
  })