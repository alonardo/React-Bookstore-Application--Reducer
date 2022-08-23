import base64 from "base-64"
import {create} from "apisauce"

const base = 'https://cae-bootstore.herokuapp.com'

export const noAuth = (cancelToken) => create({
    baseURL: base,
    cancelToken: cancelToken
})

export const basicAuth = (email, password, cancelToken) => create({
    baseURL: base,
    cancelToken: cancelToken,
    headers:{
        Authorization: 'Basic ' + base64.encode(email+":"+password)
    }
})

export const tokenAuth =(token, cancelToken) =>create({
    baseURL: base,
    cancelToken,
    headers:{
        Authorization: 'Bearer ' + token
    }
})