import {createContext, useState, useReducer, useEffect} from "react"
import { readingListReducer, listActions } from '../reducers/readingListReducer'

export const AppContext = createContext();

const AppContextProvider = ({children})=>{
    const getUserFromLS=()=>{
        let u=localStorage.getItem('user-bookstore')
        if (u){
            return JSON.parse(u)
        }
    }
    const getListFromLS=()=>{
        let u=localStorage.getList('user-bookstore')
        if (u){
            return JSON.parse(u)
        }
    }

    const [alert, setAlert] =useState({})
    const [user, _setUser] =useState(getUserFromLS()??'')
    const [book, setBook] = useState('')
    const [list, setList] = useReducer(readingListReducer, getListFromLS()??[])

    useEffect(
        ()=>{
            localStorage.setItem('readingList-bookstore', JSON.stringify(readingList))
        },
        [readingList]
    )    

    const setUser=(user)=>{
        localStorage.setItem('user-bookstore', JSON.stringify(user))
        _setUser(user)
    }
    
    const values={
        alert,
        setAlert,
        user,
        setUser,
        book,
        setBook,
        readingList,
        // Need to add funcitonality to add to reading list here!
        addToList:(book)=>{
            dispatchEvent({type: listActions.addToList, book})
        },
        removeFromList:(book)=>{
            dispatchEvent({type: listActions.removeFromList, book})
        },
        removeAllFromList:(book)=>{
            dispatchEvent({type: listActions.removeAllFromList, book})
        }
    }
    
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider