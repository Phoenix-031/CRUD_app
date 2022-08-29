import React from 'react'
import { FormControl, FormGroup, InputLabel ,Input, Typography,styled,Button} from '@mui/material'
import { useNavigate,useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

import { getUser,editUser } from '../service/api';



const EditUser = () => {

    
    const dobj = {
        name:'',
        username:'',
        email:'',
        password:'',
    }

    const navigate =useNavigate();

    const {id} = useParams();

    useEffect(() =>{
        loadUserDetails();
    },[]);

    const loadUserDetails = async() =>{
        const response = await getUser(id);
        console.log(response.data[0]);
        setUser(response.data[0]);
    }

    const [user,setUser] = useState(dobj);

    const submitUser = (e) =>{

        setUser({...user,[e.target.name] : e.target.value});
    }
    
    const editdb = async ()=>{
        await editUser(user,id);
        navigate('/all');

    }
    

    return (
        <Container>
            <Typography variant = 'h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => submitUser(e)} name = "name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => submitUser(e)} name = "username" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => submitUser(e)} name = "email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e) => submitUser(e)} name = "password" value={user.password}/>
            </FormControl>
            <FormControl>
                <Button variant = "contained" onClick={editdb}>Edit User</Button>
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


export default EditUser
