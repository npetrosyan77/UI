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

    static deleteCustomer(arg1, arg2){
        cy.get(arg1).contains(arg2).siblings('td')
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
        const option = currencies[i]
        cy.get('#currency').select(`${option}`)
    }

    static checkSelectedCurrency(){

    }
}


export default Customer;
