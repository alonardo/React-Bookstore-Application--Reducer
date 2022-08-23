import { noAuth, tokenAuth } from './client.js';

const userEndpoint = '/user'

// POST /user
export const registerUser = async (userData, cancelToken) =>{
    let error;
    const response = await noAuth(cancelToken).post(userEndpoint, userData)
    if (!response.ok){
        console.log('code is here')
        error = 'Unexpected error.'
    }
    console.log('code here!')
    return {
        error
    }
}

// PUT /user
export const editUser = async (token, userEdit, cancelToken) =>{
    let error;
    const response = await tokenAuth(token, cancelToken).put(userEndpoint, userEdit)
    if (!response.ok){
        error = 'Unexpected error.'
    }
    return{
        error
    }
}

// DELETE /user
export const deleteUser = async (token, cancelToken) =>{
    let error;
    const response = await deleteUser(token, cancelToken).delete(userEndpoint)
    if(!response.ok){
        error = 'Unexpected error.'
    }
    return error
}