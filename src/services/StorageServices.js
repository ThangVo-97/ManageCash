import realm from '../realm'

export const addIncomeMoney = (incomeMoney, dateCreate, 
    categoryIncomeMoney, expenseMoney, descriptionExpenseMoney, categoryExpenseMoney) => {
    if(!dateCreate){
        // if(!expenseMoney && !incomeMoney)
        return Promise.reject('Money is empty.')
        
    }
    
    
    const data = {
        incomeMoney,
        dateCreate,
        categoryIncomeMoney,
        expenseMoney,
        descriptionExpenseMoney,
        categoryExpenseMoney
    }

    const money = realm.objects('IncomeMoney');
    return new Promise((resolve, reject)=>{
        realm.write(()=>{
            realm.create('IncomeMoney', data)
            resolve(money)
        })
    })
}

export const getIncomeMoney = () => {
    const IncomeMoney = realm.objects('IncomeMoney');
    // const incomeSort = IncomeMoney.filtered('SORT(dateCreate DESC)')
    return Promise.resolve(IncomeMoney);
}