import { registerPage } from "../../pages/registerPage"
const registerObj = new registerPage()
import registerData from  '../../fixtures/registerData.json'

describe('Test Automation',()=>{

    it('registration flow',()=>{
        registerObj.openURL()
        registerObj.enterFirstName(registerData.FName_param)
        registerObj.enterLastName(registerData.LName_param)
        registerObj.enterEmailAdd(registerData.EmailAdd_param)
        registerObj.enterTelephone(registerData.TelNum_param)
        registerObj.enterPassword(registerData.Password_param)
        registerObj.selectPolicyCheckbox()
        registerObj.clickContinueButton()
        registerObj.verifyRegistrationWarningMessage()
        //registerObj.assertRegistrationWarningMessage()
    })
})