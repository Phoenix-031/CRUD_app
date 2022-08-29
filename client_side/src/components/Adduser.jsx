import { FormControl, FormGroup, InputLabel ,Input, Typography,styled,Button} from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';


const Adduser = () => {

    const dobj = {
        name:'',
        username:'',
        email:'',
        password:'',
    }

    const navigate =useNavigate();

    const [user,setUser] = useState(dobj);

    const submitUser = (e) =>{

        setUser({...user,[e.target.name] : e.target.value});
    }
    
    const setdb = async ()=>{
        await addUser(user);
        navigate('/all');
    }
    

  return (
    <Container>
        <Typography variant = 'h4'>Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => submitUser(e)} name = "name"/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e) => submitUser(e)} name = "username"/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => submitUser(e)} name = "email"/>
        </FormControl>
        <FormControl>
            <InputLabel>Password</InputLabel>
            <Input onChange={(e) => submitUser(e)} name = "password"/>
        </FormControl>
        <FormControl>
            <Button variant = "contained" onClick={setdb}>Add User</Button>
        </FormControl>
    </Container>
  )
}


const Container = styled(FormGroup)`
width:50%;
margin:100px auto;
border:2px solid black;
border-radius:20px;
padding:20px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
min-height:400px;
& > div{
    margin-top:20px;
}
`



export default Adduser
