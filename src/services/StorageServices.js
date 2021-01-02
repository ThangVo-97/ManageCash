import realm from '../realm'

export const getListHistoryMoney = () =>{
    const historyMoney = realm.objects('History');
    return Promise.resolve(historyMoney);
}

export const addHistoryMoney = (id, dateCreate, incomeMoney, typeIncomeMoney, expenseMoney, typeExpenseMoney) =>{
    // if(!dateCreate || !incomeMoney || !typeIncomeMoney || !expenseMoney || !typeExpenseMoney){
    //     return Promise.reject('Money is empty');
    // }

    const data = {
            id,
            dateCreate,
            incomeMoney,
            expenseMoney,
            typeIncomeMoney,
            typeExpenseMoney,
    }

    const historyData = realm.objects('History');
    return new Promise((resolve, reject)=>{
        realm.create('History', data);
        resolve(historyData);
    })
}

export const addIncomeMoney = (incomeMoney, dateCreate, categoryIncomeMoney) => {
    if(!incomeMoney || !dateCreate || !categoryIncomeMoney){
        return Promise.reject('Money is empty.')
    }
    
    const data = {
        incomeMoney,
        dateCreate,
        categoryIncomeMoney,
    }

    const money = realm.objects('IncomeMoney');
    return new Promise((resolve, reject)=>{
        realm.write(()=>{
            realm.create('IncomeMoney', data)
            resolve(money)
        })
    })
}

export const editHistory = (history) => {
    const histories = realm.objects('History')

    
    return new Promise(resolve => {
        realm.write(() => {
            task.completed = !task.completed

            resolve(histories)
        })
    })
}

export const getIncomeMoney = () => {
    const IncomeMoney = realm.objects('IncomeMoney');
    return Promise.resolve(IncomeMoney);
}


export const getExpenseMoney = () => {
    const ExpenseMoney = realm.objects('ExpenseMoney');
    return Promise.resolve(ExpenseMoney);
}

export const addExpenseMoney = (expenseMoney, categoryExpenseMoney, dateCreate, descriptionExpenseMoney) => {
    if(!expenseMoney || !dateCreate || !categoryExpenseMoney || !descriptionExpenseMoney){
        return Promise.reject('Money is empty.')
    }
    
    const data = {
        expenseMoney,
        categoryExpenseMoney,
        dateCreate,
        descriptionExpenseMoney,
    }

    const money = realm.objects('ExpenseMoney');
    return new Promise((resolve, reject)=>{
        realm.write(()=>{
            realm.create('ExpenseMoney', data)
            resolve(money)
        })
    })
}



export const getAccumulateMoney = () => {
    const AccumulateMoney = realm.objects('accumulateMoney');
    return Promise.resolve(AccumulateMoney);
}

export const addAccumulateMoney = (accumulateMoney, dateCreate, dateEnd, descriptionAccumulate, isNotification) => {
    if(!accumulateMoney || !dateCreate || !dateEnd || !descriptionAccumulate || !isNotification){
        return Promise.reject('Money is empty.');
    }

    const data = {
        accumulateMoney, 
        dateCreate, 
        dateEnd, 
        descriptionAccumulate, 
        isNotification
    }

    const money = realm.objects('accumulateMoney');
    
    return new Promise((resolve, reject)=>{
        realm.write(()=>{
            realm.create('accumulateMoney', data)
            resolve(money)
        })
    })
}
