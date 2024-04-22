function RecordForm() {
    return(
        <form>
            <label htmlFor="FirstName">
                First Name
            <input name="FirstName" type="text" placeholder="Insert Patients first name" required></input>
            </label>
            <label htmlFor="OtherName">
                Other Name
            <input name="OtherName" type="text" placeholder="Insert Patients other name"></input>
            </label>
            <label htmlFor="LastName">
                Last Name
            <input name="LastName" type="text" placeholder="Insert Patients Last name" required></input>
            </label>
            <label htmlFor="Age">
                Age
            <input name="Age" type="number" required></input>
            </label>
            <label htmlFor="DOB">
                Date of Birth
            <input name="DOB" type="date" required></input>
            </label>
            <label htmlFor="gen1">
            <input name="gen1" type="radio"></input>
            Female
            </label>
            <label htmlFor="gen2">
            <input name="gen2" type="radio"></input>
            Male
            </label>

            <label htmlFor="State of origin">
                <select name="State of Origin">
                    <option value="Abia"> Abia</option>
                </select>
            </label>

            <label htmlFor="Marital Status">
                <select name="Marital Status">
                    <option value="Abia"> Single</option>
                    <option value="Abia"> Married</option>
                    <option value="Abia"> Divorced</option>
                </select>
            </label>

            <label htmlFor="occupation">
                Occupation
            <input name="Occupation" type="text" placeholder="Insert Patients Occupation" required></input>
            </label>
            <label htmlFor="phoneNumber">
                Phone Number
            <input name="phoneNumber" type="text" placeholder="Insert Patients Phone Numer" required></input>
            </label>

            <label htmlFor="address">
                Residential Address
            <input name="address" type="text" placeholder="Insert Patients Address" required></input>
            </label>
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