import {customerInfo} from "../../support/commands"
import CommonMethods from "../../support/common";
import {Selectors} from "../../support/selectors"
import Customer from "../../pages/customer_page";

const selectors = Selectors();

global.creds1 = customerInfo()

describe('Open account flow', () => {
    before(() => {
        cy.visit('/')
    })


    it('Check that  correct currency added for customer', ()=>{
        cy.createNewCustomer(creds1.firstName, creds1.lastName, creds1.postCode)
        CommonMethods.clickElement(selectors.openAccountBtn)
        Customer.customerList(`${creds1.firstName + ' ' + creds1.lastName}`)
        CommonMethods.selectFromDropdown(selectors.customerDropdown, `${creds1.firstName + ' ' + creds1.lastName}`)
        Customer.selectCurrency()
        CommonMethods.clickElement(selectors.processBtn)
        cy.loginCustomer()
    })

})