class Account {

    static transactionTableData(arg1, arg2) {
        cy.get('.table-striped tbody tr').should('have.length', arg1)
        cy.get('tbody tr .ng-binding:nth-child(3)').should('contain', arg2)
    }


    static transactionTable(arg) {
        cy.get('.table-striped tbody tr').should('have.length', arg)
    }


    static successMessage(arg){
        cy.get('[ng-show="message"]').should('contain', arg)
    }

}

export default Account;