describe("news", () => {
    it("displays a news article", () => {
        cy.intercept('https://content.guardianapis.com/search?page-size=10&show-fields=thumbnail&show-elements=image&api-key=424714ba-bf73-4273-b546-30d872c76311', { fixture: 'news-test.json' })
        cy.visit('/')
        cy.get("h2").should("contain", 'Olympics 2020: Anna Kiesenhofer takes road race glory on day of upsets – live!')
        cy.get('[alt="2"]').should('be.visible')
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0)
            })
    })
})