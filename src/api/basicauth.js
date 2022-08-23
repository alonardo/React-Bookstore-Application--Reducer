// You should wrap the endpoints for:
// GET /login - done
// POST /user - done
// PUT /user - done
// DELETE /user - done
// GET /book - done

import { basicAuth } from "./client.js";

const endpoint = '/login';

// GET /login
export const getUser = async (email, password, cancelToken) =>{
    let error;
    let user;

    const response = await basicAuth(email, password, cancelToken).get(endpoint);
    if (response.ok){
        user = response.data
        console.log(user)
    }
    else if (response.status === 401){
        error = "Invalid Email/Password Combo"
    }
    else{
        error = "Unexpected error."
    }
    return {
        error,
        user
    }
}