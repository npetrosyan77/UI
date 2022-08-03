class CommonMethods{

    static clickElement(btn){
        cy.get(btn).click();
    }

    static fillInField(field, value){
        cy.get(field).clear().type(value);
    }

    static selectFromDropdown(arg1, arg2) {
        cy.get(arg1).select(arg2)
    }

    static clearField(arg){
        cy.get(arg).clear()
    }

}

export default CommonMethods;