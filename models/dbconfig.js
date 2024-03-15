const mongoose = require ("mongoose");

exports.dbconnection = async (URL)=> {
    try {
        mongoose.connect(URL)
        console.log("connection Established !")
    }catch(error){
        console.log(error)
    }
}