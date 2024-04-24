function RecordForm() {
    return(
        <form>
            <label htmlFor="FirstName">
                First Name
            <input 
                name="FirstName" 
                type="text" 
                placeholder="Insert Patients first name" 
                required
                value={firstname}
                onChange={(e)=>setfirstname(e.target.value)}
            />
            </label>
            <label htmlFor="MiddleName">
                Middle Name
            <input 
                name="MiddleName" 
                type="text" 
                placeholder="Insert Patients other name"
                value={MiddleName}
                onChange={(e)=>setMiddleName(e.target.value)}
            />
            </label>
            <label htmlFor="LastName">
                Last Name
            <input
                name="LastName" 
                type="text" 
                placeholder="Insert Patients Last name" 
                required
                value={LastName}
                onChange={(e)=>setLastName(e.target.value)}
            />
            </label>
            <label htmlFor="Age">
                Age
            <input
                name="Age" 
                type="number" 
                required
                value={Age}
                onChange={(e)=>setAge(e.target.value)}
             />
            </label>
            <label htmlFor="DOB">
                Date of Birth
            <input
                 name="DOB" 
                type="date" 
                required
                value={DateOfBirth}
                onChange={(e)=>setDateOfBirth(e.target.value)}
            />
            </label>
            
                <div className="border border-black w-fit">
                    Gender
                    <br></br>
                <label htmlFor="MALE"> MALE
                    <input 
                        type="radio"   
                        id="MALE" 
                        name="Male" 
                        value="MALE"
                        onChange={(e)=>setGender(e.target.value)}
                    />
                </label>
                <label htmlFor="FEMALE"> FEMALE
                    <input 
                        type="radio" 
                        id="FEMALE" 
                        name="Female" 
                        value="FEMALE"
                        onChange={(e)=>setGender(e.target.value)}
                    />
                </label>
                </div>
            

            <label htmlFor="State of origin">
                State Of Origin
                <select name="State of Origin">
                    <option value="Abia" onSelect={(e)=>setStateOfOrigin(e.target.value)}> Abia</option>
                </select>
            </label>

            <label htmlFor="Marital Status">
                <select name="Marital Status">
                    <option value="Single" onSelect={(e)=>setMaritalStatus(e.target.value)}> Single</option>
                    <option value="Married"onSelect={(e)=>setMaritalStatus(e.target.value)}> Married</option>
                    <option value="Divorced"onSelect={(e)=>setMaritalStatus(e.target.value)}> Divorced</option>
                </select>
            </label>

            <label htmlFor="occupation">
                Occupation
            <input 
                name="Occupation" 
                type="text" 
                placeholder="Insert Patients Occupation" 
                required
                value={Occupation}
                onChange={(e)=>setOccupation(e.target.value)}
            />
            </label>
            <label htmlFor="phoneNumber">
                Phone Number
            <input 
                name="phoneNumber" 
                type="text" 
                placeholder="Insert Patients Phone Numer" 
                required
                value={PhoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
            />
            </label>

            <label htmlFor="address">
                Residential Address
            <input 
                name="ResidentialAdress" 
                type="text" 
                placeholder="Insert Patients Address" 
                required
                value={ResidentialAdress}
                onChange={(e)=>setResidentialAdress(e.target.value)}
            />
            </label>
            <button
                type="submit"
            >
                SUBMIT
            </button>
        </form>
    )
}

function test() {
    return(
        <form action="/http://localhost:3000/api/records" method="POST">

        </form>
    )
}

export default RecordForm