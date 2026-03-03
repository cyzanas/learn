const express=require('express')
const app=express()
const path=require('path')
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>res.send('hi'))
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'test.html'))
})
app.post('/signup',(req,res)=>{
    res.send(`
        <h1>User Details</h1>
        <p>Name: ${req.body.name}</p>
        <p>Name: ${req.body.dob}</p>
        <p>Name: ${req.body.age}</p>
        <p>Name: ${req.body.gender}</p>
    `)
    
})
app.listen(3000,()=>console.log("server started"))
