require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 27017 //3000

//routes
const employeRoutes = require('./api/EmployeRoutes')
const patronRoutes = require('./api/PatronRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Bonjour Mongo")
})

app.use('/employes', employeRoutes)

app.use('/connection', patronRoutes)

mongoose.connect(process.env.oceandb,{useUnifiedTopology : true , useNewUrlParser: true})
.then(() =>{
    app.listen(port, ()=>{
      console.log("En cours d'execution...")
    })
}).catch(err=>console.log(err))
