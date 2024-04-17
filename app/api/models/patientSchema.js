import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI)

var Schema=new mongoose.Schema({
    ID:{
        type: mixed,
        required:true
    },
    FirstName:{
        type: String,
        required: true
    },
    MiddleName:{
        type: String,
        required: false
    },
    LastName:{
        type: String,
        required: true
    },
    Age:{
        type: Number,
        required: true
    },
    DateOfBirth:{
        type: Date,
        required: true
    },
    Nationality:{
        type: String,
        required: true
    },
    StateOfOrigin:{
        type: String,
        required: true
    },
    MedicalHistory:
    {
        type: stringify,
        required: true
    },
    ResidentialAdress:{
        type: stringify,
        required: true
    },
    PhoneNumber:{
        type: stringify,
        required: true
    },
    Occupation:{
        type: stringify,
         required: true
    },
    MaritalStatus:{
        type: stringify,
        required: true
    }
});

const PatientSchema = mongoose.Model("PatientSchema",Schema)
