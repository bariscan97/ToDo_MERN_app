const mongoose=require("mongoose")

const Connect=()=>{
    mongoose.set('strictQuery', true)
   
    mongoose.connect("mongodb+srv://mmm123:mmm123@bariscan.3hmkfqv.mongodb.net/mernapp?retryWrites=true&w=majority",
        {
            
            
            useUnifiedTopology: true,
            useNewUrlParser: true,
            autoIndex: true, 
            
        })
    .then(()=>{
        console.log("Connection Successful")
    }).catch((err)=>console.log(err))
    
}

module.exports=Connect