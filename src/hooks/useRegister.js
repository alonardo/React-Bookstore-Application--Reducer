import React, { useEffect } from 'react'
import { registerUser } from '../api/user'
import { CancelToken } from 'apisauce'
import Error from '../components/Error'
import {useNavigate} from 'react-router-dom'


export default function useRegister(registerInfo, setRegisterInfo, setError) {
    const navigate = useNavigate()

    useEffect(
      ()=>{
        const source = CancelToken.source()
        if(registerInfo.email && registerInfo.password){
            console.log('code is here')
            const register = async()=>{
            const {error} = await registerUser(registerInfo, source.token);
            if(error){
                <Error>{error}</Error>
            }
            else{
              console.log(`Success!: ${registerInfo.first_name}`)
              setRegisterInfo({})
              navigate('/login')
            }
            setError(error)
          }
          register()
        }
        return ()=>{source.cancel()}
      },
      [registerInfo, setRegisterInfo, setError, navigate]
    )
}