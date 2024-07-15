it('Google Search ',() => {
    cy.visit('https://dev-fe.buttonshift.com')
    cy.get('.css-m7nve9 > .MuiButton-text').click()
    cy.get('[data-cy="auth-email-input"]').type('merobar390276@calunia.com{Enter}')
    cy.get('[data-cy="auth-password-input"]').type('saTV3TLRsgsvpd{Enter}')

})