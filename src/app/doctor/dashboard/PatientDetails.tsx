'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { PopUpModal } from '@molecules'; // Adjust the import path if necessary

interface PatientDetailsProp {
    id: number;
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

const PatientDetails: React.FC<PatientDetailsType> = ({ patients, doctor }) => {
    const router = useRouter();
    const [selectedPatient, setSelectedPatient] = useState<PatientDetailsProp | null>(null);

    return (
        <div className="px-4 py-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-center font-bold text-[#6F42C1] mb-4">Patient Details</h2>
            <div className="grid gap-6">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 bg-[#6F42C1] text-white font-medium uppercase text-xs tracking-wider py-3 px-6 rounded-t-lg">
                    <span className="text-start">Name</span>
                    <span className="hidden md:block text-center">Gender</span>
                    <span className="hidden md:block text-center">Appointment Date</span>
                    <span className="text-center">Symptoms</span>
                    <span className="hidden md:block text-center">Status</span>
                    <span className="hidden md:block text-center">Action</span>
                    <span className="text-center">Call</span>
                </div>
                {patients.map((patient, index) => (
                    <div key={index} className="grid items-center justify-center grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 px-1 bg-white border-b border-gray-200 py-2 rounded-lg shadow-sm">
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">{patient.name}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{patient.gender}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{patient.appointmentDate}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full rounded-md bg-[#6F42C1] flex items-center justify-center">
                            <button
                                onClick={() => setSelectedPatient(patient)}
                                className="px-2 py-2 text-white hover:bg-opacity-75 whitespace-nowrap overflow-hidden overflow-ellipsis"
                            >
                                Details
                            </button>
                        </span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{patient.status}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full hidden md:flex items-center justify-center rounded-md bg-[#6F42C1]">
                            <button
                                onClick={() => router.push(`/doctor/dashboard/${patient.id}`)}
                                className="px-2 py-2 text-white hover:bg-opacity-75 whitespace-nowrap overflow-hidden overflow-ellipsis"
                            >
                                Add Prescription
                            </button>
                        </span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full flex items-center justify-center rounded-md bg-[#6F42C1]">
                            <button
                                onClick={() => router.push(`/doctor/dashboard/video_call/${patient.id}`)}
                                className="px-2 py-2 text-white hover:bg-opacity-75 whitespace-nowrap overflow-hidden overflow-ellipsis"
                            >
                                Call
                            </button>
                        </span>
                    </div>
                ))}
            </div>

            {selectedPatient && (
                <PopUpModal
                    isOpen={!!selectedPatient}
                    onClose={() => setSelectedPatient(null)}
                    title="Patient Details"
                >
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2 text-[#6F42C1]">{selectedPatient.name}</h3>
                        <p><strong>Gender:</strong> {selectedPatient.gender}</p>
                        <p><strong>Age:</strong> {selectedPatient.age}</p>
                        <p><strong>Appointment Date:</strong> {selectedPatient.appointmentDate}</p>
                        <p><strong>Email:</strong> {selectedPatient.email}</p>
                        <p><strong>Phone:</strong> {selectedPatient.phone}</p>
                        <p><strong>Diseases:</strong> {selectedPatient.diseases}</p>
                        <p><strong>Status:</strong> {selectedPatient.status}</p>
                    </div>
                </PopUpModal>
            )}
        </div>
    );
};

export default PatientDetails;
