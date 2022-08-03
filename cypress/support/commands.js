import faker from 'faker'
import CommonMethods from "./common";
import {Selectors} from "../support/selectors"
import Customer from "../pages/customer_page";

const selectors =Selectors();

export const customerInfo = () => {
    return{
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        postCode: faker.random.number(10000)
    }
}

Cypress.Commands.add('createNewCustomer', (arg) => {
    cy.get('.btn-lg[ng-click="manager()"]').click()
    cy.get('.tab:nth-child(1)').click()
    cy.get('[ng-model="fName"]').type(window[`creds${arg}`].firstName)
    cy.get('[ng-model="lName"]').type(window[`creds${arg}`].lastName)
    cy.get('[ng-model="postCd"]').type(window[`creds${arg}`].postCode)
    cy.get('.btn-default').click();
})


Cypress.Commands.add('loginCustomer', (arg)=>{
    cy.get(selectors.homeBtn).click()
    cy.get(selectors.customerLoginBtn).click()
    Customer.customersDropdown()
    CommonMethods.selectFromDropdown(selectors.customerDropdown,
        window[`creds${arg}`].firstName + ' ' + window[`creds${arg}`].lastName)
    CommonMethods.clickElement(selectors.loginBtn)
})


Cypress.Commands.add('openAccount', (arg)=>{
    cy.get('.tab:nth-child(2)').click()
    cy.get('#userSelect')
        .select(window[`creds${arg}`].firstName + ' ' + window[`creds${arg}`].lastName)
    Customer.selectCurrency()
    cy.get('[type="submit"]').click()
})