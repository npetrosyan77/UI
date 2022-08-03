class Customer {

    static checkingInfo(arg){
        cy.get('tbody tr td:nth-child(1)').contains(window[`creds${arg}`].firstName).should('exist')
        cy.get('tbody tr td:nth-child(2)').contains(window[`creds${arg}`].lastName).should('exist')
        cy.get('tbody tr td:nth-child(3)').contains(window[`creds${arg}`].postCode).should('exist')
    }

    static notExist(arg){
        cy.get('tbody tr td:nth-child(1)').should('not.contain', window[`creds${arg}`].firstName)
        cy.get('tbody tr td:nth-child(2)').should('not.contain', window[`creds${arg}`].lastName)
        cy.get('tbody tr td:nth-child(3)').should('not.contain', window[`creds${arg}`].postCode)
    }

    static deleteCustomer(arg){
        cy.get('tbody tr td:nth-child(1)').contains(window[`creds${arg}`].firstName)
            .siblings('td')
            .find('[ng-click="deleteCust(cust)"]')
            .click()
    }

    static customersDropdown(){
        cy.get('#userSelect').should('exist')
    }

    static customerList(arg){
        cy.get('#userSelect').should('contain', arg)
    }

    static welcomeMessage(arg){
        cy.get('.padT20.ng-scope div:nth-child(1)')
            .should('contain', ` Welcome ${arg} !!`)
    }

    static selectCurrency(){
        const currencies = ["Dollar", "Pound", "Rupee"]
        let currency = currencies.length
        console.log(currency)
        const i = Math.floor(Math.random() * currency)
        global.option = currencies[i]
        cy.get('#currency').select(`${option}`)
    }

    static checkSelectedCurrency(){
        cy.get('.center .ng-binding').last().should('contain', option)
    }

    static customerTable(arg1, arg2, arg3){
        cy.get('tbody tr').should('have.length', arg1)
        cy.get(`tbody tr td:nth-child(${arg2})`).contains(arg3)
    }

    static gettingAccountNumber(arg){
        cy.get('.tab:nth-child(2)').click()
        cy.get('#userSelect')
            .select(window[`creds${arg}`].firstName + ' ' + window[`creds${arg}`].lastName)
        this.selectCurrency()
        cy.get('[type="submit"]').click()
        cy.get('.tab:nth-child(3)').click()
        cy.get('.ng-untouched').type(window[`creds${arg}`].firstName)
        cy.get('tbody tr td:nth-child(4)').then(($accountNumber) =>{
            global.accountNumber = $accountNumber.text()
            cy.log(accountNumber)
            cy.get('.ng-untouched').clear().type(accountNumber)
            cy.get('tbody tr td:nth-child(4)').should('contain', accountNumber)
        })
    }

    static openAccount(arg){
        cy.get('.tab:nth-child(2)').click()
        cy.get('#userSelect')
            .select(window[`creds${arg}`].firstName + ' ' + window[`creds${arg}`].lastName)
        this.selectCurrency()
        cy.get('[type="submit"]').click()
    }

    static checkBalance(arg){
        cy.get('.center .ng-binding:nth-child(2)').should("contain", arg)
    }

}

export default Customer;