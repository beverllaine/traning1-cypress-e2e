export class homePage_keywords{

    weblocators={
        searchBar_var: 'input[name="search"]',
        searchButton_var: 'button.btn.btn-default.btn-lg',
        addToCartButton_var: 'Add to Cart',
        successAlertMessage_var: 'div.alert.alert-success.alert-dismissible'
        
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


}