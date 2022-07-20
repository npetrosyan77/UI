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


Cypress.Commands.add('createNewCustomer', (arg1, arg2, arg3) => {
    cy.get('.btn-lg[ng-click="manager()"]').click()
    cy.get('.tab:nth-child(1)').click()
    cy.get('[ng-model="fName"]').type(arg1)
    cy.get('[ng-model="lName"]').type(arg2)
    cy.get('[ng-model="postCd"]').type(arg3)
    cy.get('.btn-default').click();
})


Cypress.Commands.add('loginCustomer', ()=>{
    cy.get(selectors.homeBtn).click()
    cy.get(selectors.customerLoginBtn).click()
    Customer.customersDropdown()
    CommonMethods.selectFromDropdown(selectors.customerDropdown,
        `${creds1.firstName + ' ' + creds1.lastName}`)
    CommonMethods.clickElement(selectors.loginBtn)
})