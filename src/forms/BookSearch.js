import React, {useContext, useState} from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { apiBook } from '../api/book'
import {AppContext} from '../context/AppContext'
import { CancelToken } from 'apisauce'
import { Navigate } from 'react-router-dom'


const FormSchema = Yup.object({
    title: Yup.string().required()
})

export default function BookSearch() {
    const initialValues = {
        title:''
    }

    const {user} = useContext(AppContext)
    const source = CancelToken.source()
    
    const handleSubmit= async (values) =>{
      const book = await apiBook(values.title, source.token)
      console.log(`${JSON.stringify(book.title)}`)
      console.log(book)
      return book
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values)=> handleSubmit(values)
    })


  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
            id='title'
            name='title'
            lable='Book Title'
            placeholder='Search by Title'
            value={formik.values.title}
            onChange={formik.handleChange}
            error = {formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            color='info'
            fullWidth
        />

      <Button type='submit'>Find Book</Button>
    </form>
    
  )
}