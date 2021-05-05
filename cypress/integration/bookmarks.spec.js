describe("Bookmark manager app", () => {
    beforeEach(function() {
        cy.task('resetDb')
        cy.visit('/')
    })

    it("shows three inputs at the top", () => {
        cy.get('#url').should('be.visible');
        cy.get('#comment').should('be.visible');
        cy.get('#tags').should('be.visible');
    })

    it("shows the submit button", () => {
        cy.get('#submit-button').should('be.visible');
    })

    it("submits a new bookmark", () => {
        cy.get('#url').type('www.facebook.com');
        cy.get('#comment').type('Facebook homepage');
        cy.get('#tags').type('Social media');
        cy.get('#submit-button').click();
        cy.contains('www.facebook.com');
        cy.contains('Facebook homepage');
        cy.contains('Social media');
    })

    it("shows the table headings", () => {
        cy.contains('URL');
        cy.contains('Comments');
        cy.contains('Tags');
    })

    it("shows the delete buttons for bookmark", () => {
        cy.get('#url').type('www.facebook.com');
        cy.get('#comment').type('Facebook homepage');
        cy.get('#tags').type('Social media');
        cy.get('#submit-button').click();
        cy.contains('www.facebook.com');
        cy.contains('Facebook homepage');
        cy.contains('Social media');
        cy.get('#delete-bookmark-0').should('be.visible');
    })

    it("deletes a bookmark and shows new list of bookmarks", () => {
        cy.get('#url').type('www.instagram.com');
        cy.get('#comment').type('Instagram homepage');
        cy.get('#tags').type('Social media');
        cy.get('#submit-button').click();

        cy.get('#delete-bookmark-0').click()
        cy.get('#bookmark-url-0').should('not.exist')
    })

    it("updates a bookmark and shows new list of bookmarks", () => {
        cy.get('#url').type('www.netflix.com');
        cy.get('#comment').type('Netflix homepage');
        cy.get('#tags').type('Video');
        cy.get('#submit-button').click();
        
        cy.get('#edit-bookmark-0').click()
        cy.get('#edit-textbox-url').type('www.disneyplayer.com')
        cy.get('#edit-submit').click()
        cy.get('#bookmark-url-0').should('contain', 'www.disneyplayer.com')
    })
})