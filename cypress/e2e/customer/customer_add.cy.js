cy.faker = require('faker');
import {Selectors} from "../../support/selectors"
import CommonMethods from "../../support/common";
import {ButtonStatus, PageStatus, FiledStatus} from "../../support/commonResult";
import {customerInfo} from "../../support/commands"
import Customer from "../../pages/customer_page"

const selectors = Selectors();
const customerInfoCheck = Customer;

global.creds1 = customerInfo() //? - can't we skip the numbers and to write just creds? as it-s are running separately
global.creds2 = customerInfo() //?


describe('Customer adding and login flow', () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it('Should successfully add customer', () => {
        ButtonStatus.status().isEnabled(selectors.bankManagerloginBtn)
        CommonMethods.clickElement(selectors.bankManagerloginBtn)
        PageStatus.header().isDisplayed(selectors.header)
        CommonMethods.clickElement(selectors.addCustomerBtn)
        FiledStatus.filed().exists(selectors.fnameFiled)
        FiledStatus.filed().exists(selectors.lnameField)
        FiledStatus.filed().exists(selectors.postCodeField)
        CommonMethods.fillInField(selectors.fnameFiled, creds1.firstName)
        CommonMethods.fillInField(selectors.lnameField, creds1.lastName)
        CommonMethods.fillInField(selectors.postCodeField, creds1.postCode)
        CommonMethods.clickElement(selectors.submitBtn)
        cy.on('window:alert', (message) => {
            expect(message).contain('Customer added successfully with customer')
        })
        CommonMethods.clickElement(selectors.customersBtn)
        customerInfoCheck.checkingInfo(1)
        customerInfoCheck.deleteCustomer(1)
        customerInfoCheck.notExist(1)
    });


    it('Should check field validation message', () => {
        CommonMethods.clickElement(selectors.bankManagerloginBtn)
        CommonMethods.clickElement(selectors.addCustomerBtn)
        CommonMethods.clickElement(selectors.submitBtn)
        FiledStatus.filed()
            .toShowValidationMessage(selectors.fnameFiled, 'Please fill out this field.')
        CommonMethods.fillInField(selectors.fnameFiled, creds2.firstName)
        CommonMethods.clickElement(selectors.submitBtn)
        FiledStatus.filed()
            .toShowValidationMessage(selectors.lnameField, 'Please fill out this field.')
        CommonMethods.fillInField(selectors.lnameField, creds2.lastName)
        CommonMethods.clickElement(selectors.submitBtn)
        FiledStatus.filed()
            .toShowValidationMessage(selectors.postCodeField, 'Please fill out this field.')
    });

})


