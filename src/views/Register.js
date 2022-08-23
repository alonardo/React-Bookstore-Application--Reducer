import React from 'react'
import { Typography, Paper } from '@mui/material'
import RegisterForm from '../forms/Register'
import {useTheme} from '@mui/material/styles'

export default function Register() {

    const theme = useTheme()

  return (
    <Paper sx={{m:5, 
        p:5, 
        justifyContent:"center", 
        backgroundColor: theme.palette.background.paper, 
        backgroundImage: theme.palette.background.paper,
        maxWidth:"1000px",
        mx:"auto"
    }}>
        <Typography variant="h4"> Register </Typography>
        <RegisterForm/>
    </Paper>

  )
}