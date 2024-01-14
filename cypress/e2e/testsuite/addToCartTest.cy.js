import { homePage_keywords } from "../../pages/homePage_keywords"
const homePage_keywords_obj = new homePage_keywords()
import addToCart_testData from "../../fixtures/addToCart_testData.json"

describe("Add To Cart Test Suite",()=>{

    before(()=>{
        cy.login(addToCart_testData.login.inputLoginUsername,addToCart_testData.login.inputLoginPassword)
    })

    it("User Adds Product To Cart Successfully",()=>{
        homePage_keywords_obj.searchProduct(addToCart_testData.product.productName)
        homePage_keywords_obj.clickAddToCartButton()
        homePage_keywords_obj.verifySuccessAlertMessage().should('contain',addToCart_testData.message.successMessage).and('contain',addToCart_testData.product.productName)
    })
})