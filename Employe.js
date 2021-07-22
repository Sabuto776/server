const mongoose = require('mongoose')

const EmployeSchema = new mongoose.Schema({
    nom:{
       type:String,
       require:[true, 'Veuillez saisir votre nom']
    },
    prenom:{
        type:String,
        require:[true, 'Veuillez saisir votre prenom']
    },
    fonction:{
        type:String,
        require:[false]
    },
    arrivee:{
        type:String,
        require:[true, 'heure arrivée']
    },
    depart:{
        type:String,
        require:[true, 'heure depart']
    },
})

module.exports = mongoose.model('Employe', EmployeSchema)