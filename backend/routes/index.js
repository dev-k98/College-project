const express=require('express');
const {ensureAuthenticated}=require('../config/auth.js');
const router=express.Router();
router.get('/',(req,res)=>{
    res.render('welcome');
})

router.get('/register',(req,res)=>{
    res.render('register');
})

router.get('/dashboard',ensureAuthenticated,(req,res)=>{
    res.render('dashboard',{
        user:req.user
    });
})
module.exports=router;