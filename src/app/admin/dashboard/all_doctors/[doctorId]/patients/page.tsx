'use client'

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { SERVER_BASE_URL } from '../../../../../../../Config';
import axios from 'axios';

// Define the Patient interface
interface Patient {
    id: number;
    name: string;
    gender: string;
    age: number;
    appointmentDate: string;
    email: string;
    phone: string;
    status: string;
    doctorId: number; // Added doctorId for completeness
}

const page: React.FC = () => {
    const router = useRouter();
    const params = useParams();
    const doctorId = parseInt(params.doctorId as string, 10);

    const [patients, setPatients] = useState<Patient[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch patients from the server for the specific doctor
        const fetchPatients = async () => {
            try {
                const response = await axios.get(`${SERVER_BASE_URL}/api/doctors/${doctorId}/patients`); // API endpoint to fetch patients
                const data: Patient[] = await response.data();
                setPatients(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching patients:', error);
                setLoading(false);
            }
        };

        fetchPatients();
    }, [doctorId]);

    if (loading) {
        return (
          <div className="flex justify-center items-center h-screen">
            <p>Loading...</p>
          </div>
        );
      }

    return (
        <div className="px-4 py-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-center font-bold text-[#6F42C1] mb-4">Patients of Doctor ID: {doctorId}</h2>
            <div className="grid gap-6">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 bg-[#6F42C1] text-white font-medium uppercase text-xs tracking-wider py-3 px-6 rounded-t-lg">
                    <span className="text-start">Name</span>
                    <span className="hidden md:block text-center">Gender</span>
                    <span className="hidden md:block text-center">Age</span>
                    <span className="text-center">Appointment Date</span>
                    <span className="sm:text-center text-end">Status</span>
                </div>
                {patients.length > 0 ? (
                    patients.map((patient) => (
                        <div key={patient.id} className="grid items-center justify-center grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 px-1 bg-white border-b border-gray-200 py-2 rounded-lg shadow-sm">
                            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">{patient.name}</span>
                            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{patient.gender}</span>
                            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{patient.age}</span>
                            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis text-center">{patient.appointmentDate}</span>
                            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis text-center">{patient.status}</span>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500 mt-6">
                        No patients found for this doctor.
                    </div>
                )}
            </div>
        </div>
    );
};

export default page;
