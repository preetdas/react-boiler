
require("dotenv").config({path:"./.env"})
const express = require("express")
const app = express()
require("./models/dbconfig").dbconnection(process.env.MONGO_URL)
// const indexRouter = require("./router/index")

//router
const userRouter = require("./router/userRouter");

//body parser
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use("/api/user",userRouter)

app.all("*", (req,res,next)=>{
    res.status(404)
.json({
    sucess : false,
    message : '${req.url}route not fount'
})})


app.listen(process.env.PORT,()=>{
    console.log(`server port ${process.env.PORT}`)
})