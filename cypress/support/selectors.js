export const Selectors = () => {
    return {

        bankManagerloginBtn: '.center [ng-click="manager()"]',
        header: '.mainHeading',
        addCustomerBtn: '.tab:nth-child(1)',
        fnameFiled: '[ng-model="fName"]',
        lnameField: '[ng-model="lName"]',
        postCodeField:'[ng-model="postCd"]',
        submitBtn: '.btn-default',
        customersBtn: '.tab:nth-child(3)',
        customerTable: '.table-bordered',
        deleteBtn: '[ng-click="deleteCust(cust)"]',
        homeBtn: '.home',
        customerLoginBtn: '[ng-click="customer()"]',
        customerDropdown: '#userSelect',
        loginBtn: '.btn-default',
        openAccountBtn: '.tab:nth-child(2)',
        currencyDropdown: '#currency',
        processBtn: '[type="submit"]',
        searchFiled: '.ng-untouched',
        depositBtn: '[ng-click="deposit()"]',
        amountField: '[ng-model="amount"]',
        depositSubmitBtn: '[type="submit"]',
        transactionsBtn: '[ng-click="transactions()"]',
        transactionTable: '.table-striped tbody tr',
        withdrawalBtn: '[ng-click="withdrawl()"]',
        withdrawalSubmitBtn: '[type="submit"]',
        backBtn: '[ng-click="back()"]'
    };
};