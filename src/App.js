const express= require("express");
const multer = require("multer");
require('./database/database');
const bodyParser =  require('body-parser');
const val= require('./database/Schema');
console.log(val);
const bcrypt = require('bcryptjs')
const { checkAccount } = require('./config/auth')
const passport = require('passport')
const session = require('express-session');
const flash = require('connect-flash');
const  app= express();
const path = require("path");
var urlencodedParser = bodyParser.urlencoded({ extended:false });
require('./config/passport')(passport);
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
    
// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');  
  res.locals.error_msg = req.flash('error_msg');    
  res.locals.error = req.flash('error'); 
  next();
});

const directory = path.join(__dirname,'../public');
app.set('view engine', 'ejs');
app.use(express.static(directory));
const albumData = require('./data/album')
const artistData = require('./data/artist')
const songData = require('./data/songdata2')
const songData1 = require('./data/song')
app.get('/Home',async(req,res)=>
{
     try
     {
     await res.render('Home');
     }
     catch(e)
     {
          res.status(404).send(e)
     }
})
app.get('/album',checkAccount,(req, res) => {
     const id  = req.query.data
     if(!id) {
         res.redirect('/dashboard')
     }
     res.render('album', {
         id,
         albumData:albumData,
         artistData,
         songData,
         songData1
     })
 })
app.get('/dashboard',checkAccount,async(req,res)=>
{
     await res.render('dashboard',{
          albumData:albumData,
          songData,
          artistData,
          songData1
      });
})
app.get('/login',urlencodedParser, (req, res) => {
     res.render('login', {
         errmsg: req.flash('message')
     })
 })
 app.get('/Signup',(req, res) => {
     res.render('Signup')
 })
 
 app.post('/Signup',urlencodedParser,(req, res) => {
     const { name, email, password, password2 } = req.body
     let errors = []
 
     if( !name || !email || !password || !password2) {
         errors.push( { msg: 'Please fill all the field' } )
     }
 
     if(password !== password2) {
         errors.push ({ msg: "password should be equal"})
     }
 
     if(password.length < 6) {
         errors.push ({ msg: "password length should be 6 or more"})
     }
 
     if(errors.length > 0) {
         res.render('Signup', {
             errors,
             name,
             email,
             password,
             password2
         })
     } else {
 
        val.findOne({ email: email})
             .then(user =>{
 
                 if(user) {
                     errors.push({ msg: 'Email already exists!'})
                     res.render('Signup', {
                      errors,
                      name,
                      email,
                      password,
                      password2
                  })
          
                 } else {
                     const newUser = new val({
                         name,
                         email,
                         password
                     })
 
                     bcrypt.genSalt(10, (err, salt) => {
                         bcrypt.hash(newUser.password, salt, (err, hash) => {
                             if(err) throw err
                             
                             newUser.password = hash;
                             console.log(newUser.password);
                             newUser.save()
                                 .then((val) =>
                                 { 
                                   req.flash('success_msg','You have now registered!');
                                      res.redirect('/login')
                                 })
                                 .catch(err => console.log(err))
                             
                         })
                     })
                    
                 }
             })
     }
 })
 app.post('/login',urlencodedParser, (req, res, next) => {
     passport.authenticate('local', {
         successRedirect: '/dashboard',
         failureRedirect: '/login',
        failureFlash: true
     })(req, res, next) 
 })
 
app.get('/logout', (req, res) => {
     req.logout()
     req.flash('success_msg', 'You are logged out');
     res.redirect('/login')
 })
 
app.listen(8000,()=>
{
     console.log("Server is Successfully on Port 8000");
})
