import { noAuth } from "./client.js";

const bookEndpoint = '/book'
//GET /book
export const apiBook = async (bookID, cancelToken) =>{
    let error
    let book
    
    const response = await noAuth(cancelToken).get(bookEndpoint+'/'+bookID)
    if (response.ok){
        book = response.data
        // console.log(`${JSON.stringify(book.title)} from api`)
        // Instead of using state and set, returning book here worked
        return book
    
    }
    else{
        error = "Error!"
        console.log(error)  
    }
    return {
        error,
        book
    }
}
