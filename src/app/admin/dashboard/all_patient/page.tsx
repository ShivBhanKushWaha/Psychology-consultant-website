'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PopUpModal } from '@molecules'; // Adjust the import path if necessary
import axios from 'axios';
import { SERVER_BASE_URL } from '../../../../../Config';

// Define the Patient interface
interface Patient {
    id: number;
    name: string;
    gender: string;
    age: number;
    appointmentDate: string;
    email: string;
    phone: string;
    diseases: string;
    status: string;
    doctorName: string;
    Paid: string;
    fees: string;
}

const Page = () => {
    const router = useRouter();
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
    // const [patients, setPatients] = useState([]); // State to store patient data
    const [loading, setLoading] = useState(true); // State to manage loading
    const [error, setError] = useState<string | null>(null); // State to manage errors
    // console.log(patients)
    const doctorName = 'Shiv Prajapati';
    // useEffect(() => {
    //     const fetchPatients = async () => {
    //         try {
    //             const response = await axios.get(`${SERVER_BASE_URL}/patients`); // Replace with your API endpoint
    //             setPatients(response.data); // Set the fetched data
    //             console.log(response.data)
    //             setLoading(false); // Set loading to false
    //         } catch (error) {
    //             console.error('Error fetching patient details:', error);
    //             setError('Failed to load patient details'); // Set error message
    //             setLoading(false); // Set loading to false
    //         }
    //     };

    //     fetchPatients();
    // }, []);
    const patients: Patient[] = [
        {
            id: 1,
            name: "Alice Brown",
            gender: "Female",
            age: 28,
            appointmentDate: "2024-06-01",
            email: "alice.brown@example.com",
            phone: "123-456-7890",
            diseases: "Diabetes",
            status: "Admitted",
            doctorName: "Dr. John Doe",
            Paid: "Yes",
            fees: "1500"
        },
        {
            id: 2,
            name: "Bob White",
            gender: "Male",
            age: 45,
            appointmentDate: "2024-06-03",
            email: "bob.white@example.com",
            phone: "098-765-4321",
            diseases: "Hypertension",
            status: "Discharged",
            doctorName: "Dr. Jane Smith",
            Paid: "No",
            fees: "2000"
        },
        {
            id: 3,
            name: "Charlie Green",
            gender: "Male",
            age: 33,
            appointmentDate: "2024-06-05",
            email: "charlie.green@example.com",
            phone: "555-123-4567",
            diseases: "Asthma",
            status: "Under Treatment",
            doctorName: "Dr. Emily Jones",
            Paid: "Yes",
            fees: "3000"
        }
    ];


    return (
        <div className="px-4 py-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-center font-bold text-[#6F42C1] mb-4">All Patient List</h2>
            <div className="grid gap-6">
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 bg-[#6F42C1] text-white font-medium uppercase text-xs tracking-wider py-3 px-6 rounded-t-lg">
                    <span className="text-start">Name</span>
                    <span className="hidden lg:block text-center">Gender</span>
                    <span className="hidden md:block text-center">Appointment Date</span>
                    <span className="text-center">Doctor</span>
                    <span className="hidden md:block text-center">Status</span>
                    <span className="text-center">View Details</span>
                </div>
                {patients.map((patient) => (
                    <div key={patient.id} className="grid items-center justify-center grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 px-1 bg-white border-b border-gray-200 py-2 rounded-lg shadow-sm">
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">{patient.name}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden lg:block text-center">{patient.gender}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{patient.appointmentDate}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis text-center">{patient.doctorName}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{patient.status}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full items-center flex justify-center rounded-md bg-[#6F42C1]">
                            <button
                                onClick={() => setSelectedPatient(patient)}
                                className="px-2 py-2 text-white hover:bg-opacity-75 whitespace-nowrap overflow-hidden overflow-ellipsis "
                            >
                                View
                            </button>
                        </span>
                    </div>
                ))}
            </div>

            {/* Detailed Information Modal for the selected patient */}
            {selectedPatient && (
                <PopUpModal
                    isOpen={!!selectedPatient}
                    onClose={() => setSelectedPatient(null)}
                    title="Patient Details"
                >
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2 text-[#6F42C1]">{selectedPatient.name}</h3>
                        <p className="mb-1"><strong>Gender:</strong> {selectedPatient.gender}</p>
                        <p className="mb-1"><strong>Age:</strong> {selectedPatient.age}</p>
                        <p className="mb-1"><strong>Appointment Date:</strong> {selectedPatient.appointmentDate}</p>
                        <p className="mb-1"><strong>Email:</strong> {selectedPatient.email}</p>
                        <p className="mb-1"><strong>Phone:</strong> {selectedPatient.phone}</p>
                        <p className="mb-1"><strong>Diseases:</strong> {selectedPatient.diseases}</p>
                        <p className="mb-1"><strong>Status:</strong> {selectedPatient.status}</p>
                        <p className="mb-1"><strong>Doctor:</strong> {selectedPatient.doctorName}</p>
                        <p className="mb-1"><strong>Paid:</strong> {selectedPatient.Paid}</p>
                        <p className="mb-1"><strong>Fees:</strong> ${selectedPatient.fees}</p>
                    </div>
                </PopUpModal>
            )}
        </div>
    );
};

export default Page;
