'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { SERVER_BASE_URL } from '../../../../../Config';

// Define the Doctor interface
interface Doctor {
    id: number;
    name: string;
    specialization: string;
    city: string;
    state: string;
    fees: number;
    experience: string; // Experience in years, as a string
    _count: {
        patientDetails: number; // Total number of patients handled by the doctor
    };
}

const DoctorList: React.FC = () => {
    const router = useRouter();
    const [allDoctors, setAllDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDoctorList = async () => {
            setError(null); // Reset error before fetching
            try {
                setLoading(true);
                const res = await axios.get(`${SERVER_BASE_URL}/doctorList`);
                setAllDoctors(res.data);
                console.log('Fetched doctors:', res.data);
            } catch (error: any) {
                console.error("Error fetching doctors:", error);
                setError('Failed to fetch doctor list. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchDoctorList();
    }, []);

    const viewPatients = (doctorId: number) => {
        router.push(`/admin/dashboard/all_doctors/${doctorId}/patients`);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Loading...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Error loading doctors: {error}</p>
            </div>
        );
    }

    return (
        <div className="px-4 py-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-center font-bold text-[#6F42C1] mb-4">Doctor List</h2>
            <div className="grid gap-6">
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 bg-[#6F42C1] text-white font-medium uppercase text-xs tracking-wider py-3 px-6 rounded-t-lg">
                    <span className="text-start">Name</span>
                    <span className="hidden lg:block text-center">City</span>
                    <span className="hidden md:block text-center">Experience</span>
                    <span className="text-center">Fees</span>
                    <span className="hidden md:block text-center">Total Patients</span>
                    <span className="text-center">View Details</span>
                </div>
                {allDoctors.map((doctor) => (
                    <div key={doctor.id} className="grid items-center justify-center grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 px-1 bg-white border-b border-gray-200 py-2 rounded-lg shadow-sm">
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">{doctor.name}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden lg:block text-center">{doctor.city}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{doctor.experience} years</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis text-center">Rs. {doctor.fees}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{doctor._count.patientDetails}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full flex items-center justify-center rounded-md bg-[#6F42C1]">
                            <button
                                onClick={() => viewPatients(doctor.id)}
                                className="px-2 py-2 text-white hover:bg-opacity-75 whitespace-nowrap overflow-hidden overflow-ellipsis"
                            >
                                View Patients
                            </button>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorList;
