'use client'

import React, { useState } from 'react';

export default function PatientsList({ patients }) {
  if (!patients || patients.length === 0) {
    return <p>No patients found.</p>;
  }

  return (
    <section>
      {patients.map((patient) => {
        const [showTable, setShowTable] = useState(false); // Use useState to manage table visibility

        const handleShowClick = () => {
          setShowTable((prevShowTable) => !prevShowTable); // Toggle table visibility
        };

        return (
          <div key={patient._id} id={patient._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
            <div>
              <div className='flex'>
              <h2 className="font-bold text-2xl">{patient.LastName + " " + patient.firstname}</h2>
              <button onClick={handleShowClick}>{showTable ? 'Hide' : 'Show'}</button>
              <button>book</button>
              </div>
              <div className={showTable ? '' : 'hidden'}> {/* Conditionally render the table */}
                <table className=''>
                  {/* Customize table rows based on your patient data structure */}
                  <tr>
                    <td>Age</td>
                    <td>{patient.Age}</td>
                    <td>
                      <button>edit</button>
                    </td>
                  </tr>
                  {/* ...other patient properties... */}
                </table>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
