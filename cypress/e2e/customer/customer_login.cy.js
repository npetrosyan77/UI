import CommonMethods from "../../support/common";
import {ButtonStatus} from "../../support/commonResult";
import Customer from "../../pages/customer_page"
import {customerInfo} from "../../support/commands";
import {Selectors} from "../../support/selectors"


const customerInfoCheck = Customer;
const selectors = Selectors();

global.creds1 = customerInfo();

describe('Customer login flow', () => {
    before(() => {
        cy.visit("/")
    })


    it('Should check customer login flow', () => {
        cy.createNewCustomer(1);
        CommonMethods.clickElement(selectors.homeBtn)
        CommonMethods.clickElement(selectors.customerLoginBtn)
        customerInfoCheck.customersDropdown()
        CommonMethods.selectFromDropdown(selectors.customerDropdown,
            `${creds1.firstName + ' ' + creds1.lastName}`)
        ButtonStatus.status().isEnabled(selectors.loginBtn)
        CommonMethods.clickElement(selectors.loginBtn)
        customerInfoCheck.welcomeMessage(`${creds1.firstName + ' ' + creds1.lastName}`)
        CommonMethods.clickElement(selectors.homeBtn)
        CommonMethods.clickElement(selectors.bankManagerloginBtn)
        CommonMethods.clickElement(selectors.customersBtn)
        customerInfoCheck.checkingInfo(1)
        customerInfoCheck.deleteCustomer(1)
        customerInfoCheck.notExist(1)
    })
})