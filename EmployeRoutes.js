const router = require('express').Router()
const Employe = require('../models/Employe')

router.get('/', (req, res)=>{
    Employe.find().then(employes =>{
        res.status(200).json(employes)
    }).catch(err =>{
        res.status(500).json({error:  err.message})
    })
})

router.post('/add', (req, res)=>{
    const new_employe = new Employe(req.body)
    new_employe.save().then(employe =>{
       res.status(201).json(employe)
    }).catch(err =>{
        res.status(500).json({error: err.message})    
    })
})

module.exports = router