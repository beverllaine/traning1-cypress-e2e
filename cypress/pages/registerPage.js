// This is a keyword file

export class registerPage{

    // Below are local variables:
    weblocators={
        firstName_var: '#input-firstname',
        lastName_var: '#input-lastname',
        email_var: '#input-email',
        telephone_var: '#input-telephone',
        password_var: '#input-password',
        passwordConfirm_var: '#input-confirm',
        policyCheckbox_var: 'input[type="checkbox"]',
        continueButton_var: 'input[type="submit"]',
        registrationWarningMessage_var_text: "Warning: E-Mail Address is already registered!",
        registrationWarningMessage_var:"div.alert.alert-danger.alert-dismissible"

    }

    // Below are methods or keywords:

    // param short for parameter or argument variables
    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(FName_param){
        cy.get(this.weblocators.firstName_var).type(FName_param)
    }

    enterLastName(LName_param){
        cy.get(this.weblocators.lastName_var).type(LName_param)
    }

    enterEmailAdd(EmailAdd_param){
        cy.get(this.weblocators.email_var).type(EmailAdd_param)
    }

    enterTelephone(TelNum_param){
        cy.get(this.weblocators.telephone_var).type(TelNum_param)
    }

    enterPassword(Password_param){
        cy.get(this.weblocators.password_var).type(Password_param)
        cy.get(this.weblocators.passwordConfirm_var).type(Password_param)
    }

    selectPolicyCheckbox(){
        cy.get(this.weblocators.policyCheckbox_var).check()
    }

    clickContinueButton(){
        cy.get(this.weblocators.continueButton_var).click()
    }

    verifyRegistrationWarningMessage(){
        return cy.get(this.weblocators.registrationWarningMessage_var)
    }
    
    assertRegistrationWarningMessage(){
        cy.get(this.weblocators.registrationWarningMessage_var).should('be.visible')
        cy.get(this.weblocators.registrationWarningMessage_var).contains(this.weblocators.registrationWarningMessage_var_text)
    }

}