const mongoose = require ("mongoose")



const userModel = new mongoose.Schema({
    username : {
        type : String,
        unique : true ,
        trim : true,
        required : [true ,  "username is required"],
        minlength : [3, "username must be atleat 3 character "]
    },

    email : {
        type : String,
        lowercase : true,
        required : [true ,  "email  is required"],
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    password : {
        type : String,
        trim : true,
        required : [true ,  "password is required"],
        minlength : [3, "password must be atleat 3 character "],
        maxlength : [15,"password must be atmost 15 character"],
        match:[/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/,"password invalided"]
    },
},{timestamps : true});

