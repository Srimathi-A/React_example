import {TextField,Button,Typograph,Box}from "@mui/material";
import React,{useState} from 'react';

export default function Mui (){
    const [email,setEmail]=useState('')
    const [password,setpassword]=useState('')
    return(
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            align:'center',
            '& .MuiButton-root':{width:'15ch'},
            '& .MuiTextField-root':{width:'50ch'}
        }}
        >
            <div>
                <Typograph sx={{mt:3}}align='center' color='primary' variant="h5">
                    Please Login to your Account!
                </Typograph>
            </div>
            <div>
                <TextField
                onChange={(event)=> setEmail(event.target.value)}
                name='email'
                value={email}
                id='email'
                label='Email'
                type='email'
                variant='outlined'
                margin='normal'
                requiredfullWidth
                align='center'>

                </TextField>
            </div>
            <div>
            <TextField
                onBlur={(event)=>(event)}
                value={password}
                onChange={(event)=>setpassword(event.target.value)}
                id='password'
                label='Password'
                type='password'
                variant='outlined'
                margin='normal'
                requiredfullWidth
                align='center'>

                </TextField>  
            </div>
            <div>
                <Button
                type='submit'
                align='center'
                variant='contained'
                color='primary'
                onClick={()=>{alert('you have Successfully Loged in!')}}>LogIn</Button>

            </div>
        </Box>
    )
}