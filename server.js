const express = require('express')
const bodyparser = require('body-parser')
const studentRoutes = require('./src/student/routes/students.js')

const app = express()
const PORT = 3000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    next()
})

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use('/api/students',studentRoutes)

app.listen(PORT,()=> console.log(`app listen to port:${PORT}`))