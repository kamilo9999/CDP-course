describe("First Cypress scenario", () => {
    it('Visit section about author of the course ', function() {
        
        cy.visit('https://fabrykatestow.pl');

        cy.get('header li').contains("Kursy").click();
        
        cy.get('a').contains("POKAŻ CZEGO SIĘ NAUCZĘ").first().click();

        cy.get('h1').contains("Kto nauczy CIę testów automatycznych?").parents('div.elementor-container').screenshot({ capture: 'viewport'});


    })
})