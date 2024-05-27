'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

interface PatientDetailsProp {
    id:Number;
    name: string;
    gender: string;
    age: number;
    appointmentDate: string;
    email: string;
    phone: string;
    diseases: string;
    status: string;
}

type PatientDetailsType = {
    patients: PatientDetailsProp[],
    doctor: string;
}

const PatientDetails: React.FC<PatientDetailsType> = ({ patients,doctor}) => {
    const router = useRouter()
    
    return (
        <div className="px-2 py-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-center font-bold text-[#6F42C1] mb-4">Patient Details</h2>
            <div className="grid gap-6">
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 bg-[#6F42C1] text-white font-medium uppercase text-xs tracking-wider py-3 px-6 rounded-t-lg">
                    <span className=" text-start">Name</span>
                    <span className="hidden text-center lg:block">Gender</span>
                    <span className="hidden text-center lg:block">Age</span>
                    <span className="text-center">Appointment Date</span>
                    <span className="hidden text-center lg:block">Email</span>
                    <span className="hidden text-center md:block">Phone</span>
                    <span className="hidden text-center lg:block">Diseases</span>
                    <span className="hidden text-center md:block">Status</span>
                    <span className=" text-center">Action</span>
                </div>
                {patients.map((patient, index) => (
                    <div key={index} className="grid items-center justify-center grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 px-1 bg-white border-b border-gray-200 py-2 rounded-lg shadow-sm">
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">{patient.name}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden lg:block text-center">{patient.gender}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden lg:block text-center">{patient.age}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis text-center">{patient.appointmentDate}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden lg:block text-center">{patient.email}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{patient.phone}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden lg:block text-center">{patient.diseases}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{patient.status}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full rounded-md bg-[#6F42C1] flex flow-row items-center justify-center">
                            <button onClick={() => router.push(`/doctor/dashboard/${patient.id}`)} className="px-2 py-2  text-white hover:bg-opacity-75 whitespace-nowrap overflow-hidden overflow-ellipsis">Add Prescription</button>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PatientDetails;
