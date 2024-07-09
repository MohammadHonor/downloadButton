import express from 'express';

import cors from 'cors'

const app=express();

app.use(cors())

app.get('/',(req,res)=>{
    res.download("./public/temp/Resume.pdf" )
})

app.listen(8000,()=>{
    console.log("server running")
})