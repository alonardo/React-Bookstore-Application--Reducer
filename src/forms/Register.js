import React, {useState} from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import useRegister from '../hooks/useRegister'


const FormSchema = Yup.object(
    {
        first:Yup.string().required(),
        last:Yup.string().required(),
        email:Yup.string().email('Must be valid email format.').required(),
        password:Yup.string().required()
    }
)

export default function RegisterForm({user}) {
    const initialValues={
        first:user?.first ?? '',
        last: user?.last ?? '',
        email: user?.email ?? '',
        password:'',
        confirm_password: '',
    }

    const [registerInfo, setRegisterInfo]=useState({})
    const [error, setError]=useState('')

    useRegister(registerInfo, setRegisterInfo, setError)

    const handleSubmit=(values)=>{
        console.log(values)
        setRegisterInfo(values)
    }
    
    const formik = useFormik(
        {
            initialValues: initialValues,
            validationSchema: FormSchema,
            onSubmit: (values)=> handleSubmit(values)
        })

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
            id = 'first'
            name = 'first'
            fullWidth
            sx={{mb: 2, mt:2}}
            label='First Name'
            placeholder='First Name'
            value={formik.values.first}
            onChange={formik.handleChange}
            error = {formik.touched.first && Boolean(formik.errors.first)}
            helperText={formik.touched.first && formik.errors.first}
            />
            <TextField
            id = 'last'
            name = 'last'
            fullWidth
            sx={{mb: 2, mt:2}}
            label='Last Name'
            placeholder='Last Name'
            value={formik.values.last}
            onChange={formik.handleChange}
            error = {formik.touched.last && Boolean(formik.errors.last)}
            helperText={formik.touched.last && formik.errors.last}
            />
            <TextField
            id = 'email'
            name = 'email'
            fullWidth
            sx={{mb: 2, mt:2}}
            label='Email'
            placeholder='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error = {formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            />
        <TextField
            id ="password"
            name="password"
            type="password"
            fullWidth
            sx={{mb: 2, mt:2}}
            label="Password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error = {formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
        />
        <Button variant="contained">Register</Button>
        </form>   
    )
}