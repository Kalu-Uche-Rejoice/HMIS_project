import mongoose from 'mongoose';

var Schema=new mongoose.Schema({
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
    Relationship:
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
    }
});
const  NOKSchema = mongoose.Model("NOKSchema",Schema)
