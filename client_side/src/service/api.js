import axios from 'axios';

const URL = "http://localhost:3006";

export const addUser = async (data)=>{
    try{
        await axios.post(`${URL}/add`,data);
    }catch(err){
        console.log(err);
    }
}

export const getUsers = async () =>{
    try{
        return await axios.get(`${URL}/all`);
    }catch(err){
        console.log(err);
    }
}

export const getUser = async (id) =>{
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(err){
        console.log(err);
    }
}

export const editUser = async (user,id) =>{
    try{
        return await axios.put(`${URL}/${id}`,user);
    }catch(err){
        console.log(err);
    }
}

export const delUser = async (id) =>{
    try{
        return await axios.delete(`${URL}/${id}`);
    }catch(err){
        console.log(err);
    }
}

