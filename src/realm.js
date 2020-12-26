import Realm from 'realm'

const HistorySchema = {
    name: 'History',
    properties: {
        dateCreate: 'date',
        incomeMoney: 'long',
        expenseMoney: 'long',
        typeIncomeMoney: 'string',
        typeExpenseMoney: 'string',
    }
}

const accumulateMoneySchema = {
    name: 'accumulateMoney',
    properties:{
        accumulateMoney: 'long',
        dateCreate: 'date',
        dateEnd: 'date',
        descriptionAccumulate: 'string',
        isNotification: 'bool',
    }
}

const IncomeMoneySchema = {
    name: 'IncomeMoney',
    properties:{
        incomeMoney: 'long',
        dateCreate: 'date',
        categoryIncomeMoney: 'string',
    }
}


const ExpenseMoneySchema = {
    name: 'ExpenseMoney',
    properties:{
        dateCreate: 'date',
        expenseMoney: 'long',
        descriptionExpenseMoney: 'string',
        categoryExpenseMoney: 'string',
    }
}

export default new Realm({
    schema:
        [
            accumulateMoneySchema,
            ExpenseMoneySchema,
            IncomeMoneySchema,
            HistorySchema,
        ]
})