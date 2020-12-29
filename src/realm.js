import Realm from 'realm'

const HistorySchema = {
    name: 'History',
    properties: {
        dateCreate: 'date',
        incomeMoney: 'string',
        expenseMoney: 'string',
        typeIncomeMoney: 'string',
        typeExpenseMoney: 'string',
    }
}

const AccumulateMoneySchema = {
    name: 'accumulateMoney',
    properties:{
        accumulateMoney: 'string',
        dateCreate: 'date',
        dateEnd: 'date',
        descriptionAccumulate: 'string',
        isNotification: 'bool',
    }
}

const IncomeMoneySchema = {
    name: 'IncomeMoney',
    properties:{
        incomeMoney: 'string',
        dateCreate: 'date',
        categoryIncomeMoney: 'string',
    }
}


const ExpenseMoneySchema = {
    name: 'ExpenseMoney',
    properties:{
        dateCreate: 'date',
        expenseMoney: 'string',
        descriptionExpenseMoney: 'string',
        categoryExpenseMoney: 'string',
    }
}

export default new Realm({
    schema:
        [
            AccumulateMoneySchema,
            ExpenseMoneySchema,
            IncomeMoneySchema,
            HistorySchema,
        ]
})