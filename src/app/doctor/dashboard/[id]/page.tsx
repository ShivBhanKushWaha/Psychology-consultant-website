'use client'
import { Logo } from '@assests';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const PatientPage = () => {
  const router = useRouter();
  const params = useParams();
  const [checked,setChecked] = useState(false)
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const patients = [
    { id: 1, name: 'Shivbhan Kushwaha', gender: 'male', age: 22, appointmentDate: '2022-11-25', email: 't@gmail.com', phone: '116546633', diseases: 'Cold', status: 'consult' },
    { id: 2, name: 'Abhay Sharma', gender: 'male', age: 27, appointmentDate: '2022-12-03', email: 'Abhay@gmail.com', phone: '074654540', diseases: 'Fever', status: 'Pending' },
    { id: 3, name: 'Ayush Jaiswal', gender: 'male', age: 27, appointmentDate: '2022-12-03', email: 'Ayush@gmail.com', phone: '700056465', diseases: 'Fever', status: 'Pending' },
    { id: 4, name: 'You & Me', gender: 'female', age: 36, appointmentDate: '2022-12-03', email: 'Mam@gmail.com', phone: '770060650', diseases: 'Fever', status: 'Pending' }
  ];

  const patient = patients.find(p => p.id === parseInt(id));

  if (!patient) {
    return <p>Patient not found</p>;
  }

  const [prescription, setPrescription] = useState({
    treatment: '',
    mediation: '',
    therapies: ''
  });

  const doctorName = 'Dr. Shiv Prajapati';

  const handleSavePrescription = () => {
    // Logic to save the prescription
    console.log(`Prescription for ${patient.name}: ${prescription}`);
    console.log(prescription)
    // You can add navigation or state update logic here as needed
  };

  return (
    <div className="px-2 bg-white rounded-lg shadow-[#6F42C1] shadow-2xl sm:py-8 sm:px-16 py-4">
      <h2 className="text-2xl text-center font-bold text-[#6F42C1] mb-4">Add Prescription for {patient.name}</h2>
      <div className="lg:w-3/5 sm:h-4/5 w-full flex flex-col mx-auto border-[2px] border-[#6F42C1] rounded-2xl px-4 py-5">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-evenly">
            <Image alt='logo' src={Logo} />
          </div>
          <div className="flex sm:flex-row flex-col sm:items-center items-start sm:justify-between mt-4">
            <div>
              <div className="flex flow-row items-center justify-between mt-1">
                <p className="text-[20px] text-[#6F42C1] text-opacity-100 font-semibold">Dr: <span className="text-[18px]  text-opacity-50 font-normal">{doctorName}</span></p>
              </div>
              <div className="flex flow-row items-center justify-between mt-1">
                <p className="text-[20px] text-[#6F42C1] text-opacity-100 font-semibold">Serial No: <span className="text-[18px]  text-opacity-50 font-normal">{id}</span></p>
              </div>
              <div className="flex flow-row items-center justify-between mt-1">
                <p className="text-[20px] text-[#6F42C1] text-opacity-100 font-semibold">Patient Name: <span className="text-[18px]  text-opacity-50 font-normal">{patient.name}</span></p>
              </div>
              <div className="flex flow-row items-center justify-between mt-1">
                <p className="text-[20px] text-[#6F42C1] text-opacity-100 font-semibold">Gender: <span className="text-[18px]  text-opacity-50 font-normal">{patient.gender}</span></p>
              </div>
            </div>
            <div>
              <div className="flex flow-row items-center justify-between mt-1">
                <p className="text-[20px] text-[#6F42C1] text-opacity-100 font-semibold">Patient Name: <span className="text-[18px]  text-opacity-50 font-normal">{patient.name}</span></p>
              </div>
              <div className="flex flow-row items-center justify-between mt-1">
                <p className="text-[20px] text-[#6F42C1] text-opacity-100 font-semibold">Appointment Date: <span className="text-[18px]  text-opacity-50 font-normal">{patient.appointmentDate}</span></p>
              </div>
              <div className="flex flow-row items-center justify-between mt-1">
                <p className="text-[20px] text-[#6F42C1] text-opacity-100 font-semibold">Age: <span className="text-[18px]  text-opacity-50 font-normal">{patient.age}</span></p>
              </div>
              <div className="flex flow-row items-center justify-between mt-1">
                <p className="text-[20px] text-[#6F42C1] text-opacity-100 font-semibold">Phone: <span className="text-[18px]  text-opacity-50 font-normal">{patient.phone}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-2xl text-[#6F42C1] font-semibold mt-4" htmlFor="Treatment plan">Treatment plan</label>
          <textarea
            className="w-full resize-none border mt-1 border-[#6F42C1] rounded-xl outline-none appearance-none p-2 mb-4"
            rows={4}
            value={prescription.treatment}
            onChange={(e) => setPrescription({ ...prescription, treatment: e.target.value })}
            placeholder='Treatment plan'
          />
        </div>
        <div>
          <label className="text-2xl text-[#6F42C1] font-semibold mt-4" htmlFor="Medication">Medication</label>
          <textarea
            className="w-full resize-none border mt-1 border-[#6F42C1] rounded-xl outline-none appearance-none p-2 mb-4"
            rows={4}
            value={prescription.mediation}
            onChange={(e) => setPrescription({ ...prescription, mediation: e.target.value })}
            placeholder='Mediation'
          />
        </div>
        <div>
          <label className="text-2xl text-[#6F42C1] font-semibold mt-4" htmlFor="Therapies">Therapies</label>
          <textarea
            className="w-full resize-none border mt-1 border-[#6F42C1] rounded-xl outline-none appearance-none p-2 mb-4"
            rows={4}
            value={prescription.therapies}
            onChange={(e) => setPrescription({ ...prescription, therapies: e.target.value })}
            placeholder='Therapies'
          />
        </div>

        <div className="flex flex-row gap-x-3 items-center justify-center">
          <input type="checkbox" onClick={() => setChecked(true)}/>
          <p className="text-base text-[#6F42C1] text-opacity-80">I agree with rules & regulation of doctor</p>
        </div>
        <div className="flex flex-row items-center justify-center mt-2">
          <button
            className={`px-8 py-2 bg-[#6F42C1] text-white rounded-md hover:bg-opacity-75 mr-5 ${checked ? "cursor-pointer" : "cursor-not-allowed"} `}
            onClick={() => handleSavePrescription()}
          >
            Save
          </button>
          <button
            className="px-8 py-2 bg-gray-300 text-[#6F42C1] rounded-md hover:bg-gray-400"
            onClick={() => router.back()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientPage;
