const listActions={
    addToList: 'addToList',
    removeFromList: 'removeFromList',
    removeAllFromList: 'removeAllFromList',   
}

function readingListReducer(readingList=[], {type, book}){
    switch(type){
        case listActions.addToList:
            return [...readingList, book]

        case listActions.removeFromList:
            let newList=readingList.slice()
            for (let listItem of newList){
                if(listItem.id === item.id){
                    newList.splice(newList.indexOf(listItem),1)
                    return newList
                }
            }
            return newCart

        case listActions.removeAllFromList:
            return []

        default:
            throw new Error('Error!')
    }
}

export {
    readingListReducer,
    listActions
}