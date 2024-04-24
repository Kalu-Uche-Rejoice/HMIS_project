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

    Relationship:
    {
        type: String,
        required: true
    },
    ResidentialAdress:{
        type: String,
        required: true
    },
    PhoneNumber:{
        type: String,
        required: true
    }
});
const  NOK = mongoose.Model("NOKS",Schema);

export default NOK;
