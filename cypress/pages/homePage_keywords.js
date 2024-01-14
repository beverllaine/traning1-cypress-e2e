export class homePage_keywords{

    weblocators={
        searchBar_var: 'input[name="search"]',
        searchButton_var: 'button.btn.btn-default.btn-lg',
        addToCartButton_var: 'Add to Cart',
        successAlertMessage_var: 'div.alert.alert-success.alert-dismissible',

        myAccountHeaderText_var: 'My Account',
        myOrdersHeaderText_var: 'My Orders',
        myAffiliateAccountHeaderText_var: 'My Affiliate Account',
        myNewsletterHeaderText_var: 'Newsletter',
        
    }

    searchProduct(productName){
        cy.get(this.weblocators.searchBar_var).type(productName)
        cy.get(this.weblocators.searchButton_var).click()
    }

   clickAddToCartButton(){
        cy.contains(this.weblocators.addToCartButton_var).first().click()
   }

   verifySuccessAlertMessage(){
        return cy.get(this.weblocators.successAlertMessage_var)
   }

   accountInUrlIsVerified(){
        cy.url().should('contain','route=account/account')
   }

   accountHeaderElementsAreVerified(){
        cy.contains(this.weblocators.myAccountHeaderText_var).should('be.visible')
        cy.contains(this.weblocators.myOrdersHeaderText_var).should('be.visible')
        cy.contains(this.weblocators.myAffiliateAccountHeaderText_var).should('be.visible')
        cy.contains(this.weblocators.myNewsletterHeaderText_var).should('be.visible')
   }

}