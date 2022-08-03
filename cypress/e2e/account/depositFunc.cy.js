import CommonMethods from "../../support/common";
import Customer from "../../pages/customer_page";
import Account from "../../pages/account_page"
import {FiledStatus} from "../../support/commonResult";
import {Selectors} from "../../support/selectors"
import {customerInfo} from "../../support/commands";
import faker from "faker";

const selectors = Selectors();

global.creds1 = customerInfo();
global.creds2 = customerInfo();
global.creds3 = customerInfo();

global.amount1 = faker.random.number(1000, 2000)
global.amount2 = faker.random.number(100, 900)
global.word = faker.random.word(1)


describe('Checking deposit/withdraw functionality', () => {

    beforeEach(()=>{
        cy.visit('/')
    })


    it('Check that deposit functionality works correctly', () => {
        CommonMethods.clickElement(selectors.bankManagerloginBtn)
        cy.createNewCustomer(1)
        CommonMethods.clickElement(selectors.openAccountBtn)
        cy.openAccount(1)
        cy.loginCustomer(1)
        Customer.checkBalance(0)
        CommonMethods.clickElement(selectors.depositBtn)
        FiledStatus.filed().exists(selectors.depositBtn)
        CommonMethods.fillInField(selectors.amountField, global.amount1)
        CommonMethods.clickElement(selectors.depositSubmitBtn)
        Account.successMessage('Deposit Successful')
        Customer.checkBalance(global.amount1)
        CommonMethods.clickElement(selectors.transactionsBtn)
        Account.transactionTableData(1,'Credit')
        CommonMethods.clickElement(selectors.homeBtn)
        CommonMethods.clickElement(selectors.bankManagerloginBtn)
        CommonMethods.clickElement(selectors.customersBtn)
        Customer.deleteCustomer(1)
        Customer.notExist(1)
    })

    it('Check that in amount field only amount can be entered', ()=>{
        CommonMethods.clickElement(selectors.bankManagerloginBtn)
        cy.createNewCustomer(2)
        cy.openAccount(2)
        cy.loginCustomer(2)
        CommonMethods.clickElement(selectors.depositBtn)
        CommonMethods.fillInField(selectors.amountField, global.word)
        FiledStatus.filed().isEmpty(selectors.amountField)
        CommonMethods.clickElement(selectors.depositBtn)
        CommonMethods.fillInField(selectors.amountField, '!@#$%^&*()_+')
        FiledStatus.filed().toShowValidationMessage(selectors.amountField, 'Please fill out this field.')
        CommonMethods.clickElement(selectors.homeBtn)
        CommonMethods.clickElement(selectors.bankManagerloginBtn)
        CommonMethods.clickElement(selectors.customersBtn)
        Customer.deleteCustomer(2)
        Customer.notExist(2)
    })

    // it('Checking deposits, withdrawals, transactions', ()=>{
    //     CommonMethods.clickElement(selectors.bankManagerloginBtn)
    //     cy.createNewCustomer(3)
    //     cy.openAccount(3)
    //     cy.loginCustomer(3)
    //     CommonMethods.clickElement(selectors.depositBtn)
    //     CommonMethods.fillInField(selectors.amountField, global.amount1)
    //     CommonMethods.clickElement(selectors.depositSubmitBtn)
    //     Customer.checkBalance(global.amount1)
    //     CommonMethods.clickElement(selectors.withdrawalBtn)
    //     CommonMethods.fillInField(selectors.amountField, global.amount2)
    //     CommonMethods.clickElement(selectors.withdrawalSubmitBtn)
    //     Account.successMessage('Transaction Successful')
    //     Customer.checkBalance(global.amount1 - global.amount2)
    //     CommonMethods.clickElement(selectors.transactionsBtn)
    //     Account.transactionTableData(2, 'Debit')
    //     CommonMethods.clickElement(selectors.backBtn)
    //     CommonMethods.clickElement(selectors.withdrawalBtn)
    //     CommonMethods.fillInField(selectors.amountField, global.amount1 + global.amount2)
    //     CommonMethods.clickElement(selectors.withdrawalSubmitBtn)
    //     Account.successMessage('Transaction Failed. You can not withdraw amount more than the balance.')
    //     CommonMethods.clickElement(selectors.transactionsBtn)
    //     Account.transactionTable(2)
    // })
})