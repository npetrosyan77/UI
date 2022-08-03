export const ButtonStatus = class ButtonStatus {
    static status() {
        return {
            isEnabled: (button) => {
                cy.get(button)
                    .should("be.visible").and('not.be.disabled');
            },
        };
    }
}


export const PageStatus = class PageStatus {
    static header() {
        return {
            isDisplayed: (header)=> {
                cy.get(header).should("exist").and("be.visible")
            }
        }
    }
}

export const FiledStatus = class FiledStatus {
    static filed() {
        return {
            exists: (field) => {
                cy.get(field).should("exist").and('not.be.disabled')
            },

            toShowValidationMessage: (field, arg) => {
                cy.get(field).then(($input) => {
                    expect($input[0].validationMessage).to.eq(arg)
                })
            },

            isEmpty: (field)=>{
                cy.get(field).should('be.empty')
            }
        }
    }
}