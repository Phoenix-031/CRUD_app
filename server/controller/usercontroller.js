const mongoose = require('mongoose');
const User = require('../models/user-schema');

const usr = {
    addUser : async (req,res) =>{
        const user =req.body;
        const nuser = new User(user);
        try{
            await nuser.save();
            res.status(200).json(nuser);
        }catch(err){
            console.log(err);
            res.status(404).json(err);
        }
},

    getUsers : async (req,res) =>{
        try{
            const users = await User.find({});
            res.status(200).json(users);
        }catch(err){
            console.log(err);
            res.status(404).json(err);
        }
    },

    getUser : async (req,res) =>{
        try{
            const user = await User.find({email:req.params.id});
            res.status(200).json(user);
        }catch(err){
            console.log(err);
            res.status(404).json(err);
        }
    },

    editUser : async (req,res) =>{
        const user = req.body;
        const euser = new User(user);
        try{
            await User.updateOne({email:req.params.id},euser);
            res.status(200).json(euser);
        }catch(err){
            console.log(err);
            res.status(404).json(err);
        }
    },

    delUser : async (req,res) =>{
        try{
            await User.deleteOne({email:req.params.id});
            res.status(200).json("user deleted succesfully");
        }catch(err){
            console.log(err);
            res.status(404).json(err);
        }
    }
};

module.exports = usr;