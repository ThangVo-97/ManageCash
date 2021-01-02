import Realm from 'realm'

const HistorySchema = {
    name: 'History',
    properties: {
            id: 'string',
            dateCreate: 'string',
            incomeMoney: 'string',
            expenseMoney: 'string',
            typeIncomeMoney: 'string',
            typeExpenseMoney: 'string'
    }
}
const IncomeMoneySchema = {
    name: 'IncomeMoney',
    properties:{
        incomeMoney: 'string',
        dateCreate: 'date',
        categoryIncomeMoney: 'string',
        expenseMoney: 'string',
        descriptionExpenseMoney: 'string',
        categoryExpenseMoney: 'string'
    }
}

const ExpenseMoneySchema = {
    name: 'ExpenseMoney',
    properties:{
        dateCreate: 'date',
        expenseMoney: 'string',
        descriptionExpenseMoney: 'string',
        categoryExpenseMoney: 'string'
    }
}

export default new Realm({
    schema:
        [
            ExpenseMoneySchema,
            IncomeMoneySchema,
            HistorySchema,
        ]
})