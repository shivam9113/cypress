it('Google Search ',() => {
    cy.visit('https://dev-fe.buttonshift.com')
    cy.contains('Sign up').click()
    cy.get('[data-cy="auth-email-input"]').type('merobar390276@calunia.com{Enter}')
    cy.get('#mui-3').type('saTV3TLRsgsvpd{Enter}')
    cy.get('#mui-4').type('saTV3TLRsgsvpd{Enter}')
    cy.get('[aria-label="Please enter OTP character 1"]').type('1')
    cy.get('[aria-label="Please enter OTP character 2"]').type('2')
    cy.get('[aria-label="Please enter OTP character 3"]').type('3')
    cy.get('[aria-label="Please enter OTP character 4"]').type('4')
    cy.get('[aria-label="Please enter OTP character 5"]').type('5')
    cy.get('[aria-label="Please enter OTP character 6"]').type('6{Enter}')
    cy.get('#mui-8').type("United States{Enter}")
    cy.get('[data-cy="signup-phone-input"]').type('(717) 550-1675{Enter}')


}
)