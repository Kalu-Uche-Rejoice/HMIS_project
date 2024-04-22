import mongoose, {Schema} from 'mongoose';

var PSchema=new Schema({
    
    firstname:String,
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
    },
    Occupation:{
        type: String,
         required: true
    },
    MaritalStatus:{
        type: String,
        required: true
    },
   
},
{
    timestamps: true
}
);

const Patients = mongoose.models.PatientSchema || mongoose.model("Patients", PSchema)

export default Patients
