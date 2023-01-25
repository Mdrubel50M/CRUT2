import express from 'express'
const app = express();
import Router from'./routs/routs.js'


app.use('/api',Router);


app.use('*' ,(req,res)=>{
    res.status(404).json({data:" not found", try:'agin'})
})

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`server connect with http://localhost:${PORT}`)
})