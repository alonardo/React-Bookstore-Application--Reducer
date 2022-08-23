import React, {useEffect} from 'react'
import { AppContext } from '../context/AppContext'
import { CancelToken } from 'apisauce'
import { getBook } from '../api/book'
import { useNavigate } from 'react-router-dom'


export default function useGetBook(BookID, setError) {
    const {setBook} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
      ()=>{
        const source = CancelToken.source()

        if(BookID.id){
          const getThisBook = async()=>{
            const {book} = await getBook(BookID.id, source.token);{
              console.log(book.title)
              setBook(book)
            }
          }
          getThisBook()
        }
        return ()=>{source.cancel()}
      },
      [setBook, setError, navigate]
    )
}