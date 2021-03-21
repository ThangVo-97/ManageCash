import Realm from 'realm'

const IncomeMoneySchema = {
    name: 'IncomeMoney',
    properties:{
        incomeMoney: 'string',
        dateCreate: 'string',
        categoryIncomeMoney: 'string',
        expenseMoney: 'string',
        descriptionExpenseMoney: 'string',
        categoryExpenseMoney: 'string'
    }
}


export default new Realm({
    schema:
        [
            IncomeMoneySchema,
        ]
})