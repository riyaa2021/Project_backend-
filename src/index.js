import dotenv from 'dotenv';
dotenv.config({path : '.env'});

import {connectDB} from './db/index.js';
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server running ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO_DB connection failed!!!!", err)
})