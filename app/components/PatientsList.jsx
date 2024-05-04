export default function PatientsList(){

    return(
        <section>
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">Patient Name</h2>
                    <div className="hidden">
                        <table>
                            <tr>
                                <td>Date of Birth</td>
                                <td></td>
                                <td>
                                    <button>edit</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td></td>
                                <td>
                                    <button>edit</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Nationality</td>
                                <td></td>
                                <td>
                                    <button>edit</button>
                                </td>
                            </tr>
                            <tr>
                                <td>State of Origin</td>
                                <td></td>
                                <td>
                                    <button>edit</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Medical History</td>
                                <td></td>
                                <td>
                                    <button>edit</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Residential Address</td>
                                <td></td>
                                <td>
                                    <button>edit</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td></td>
                                <td>
                                    <button>edit</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Occupation</td>
                                <td></td>
                                <td>
                                    <button>edit</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Marital Status</td>
                                <td></td>
                                <td>
                                    <button>edit</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )

}