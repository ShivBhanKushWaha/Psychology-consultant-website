'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

// Define the Doctor interface
interface Doctor {
    id: number;
    name: string;
    phone: string;
    email: string;
    specialization: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zipCode: string;
    ugDegree: string;
    pgDegree?: string;
    instituteName: string;
    otherQualification?: string;
    gender: string;
    fees: number;
    availability: string;
    timeSlot: string;
    experience: number; // Years of experience
    patients: number; // Total number of patients handled by the doctor
}

// Sample data for doctors
const doctors: Doctor[] = [
    {
        id: 1,
        name: 'Dr. John Doe',
        phone: '123-456-7890',
        email: 'john.doe@example.com',
        specialization: 'Cardiology',
        address1: '123 Main St',
        address2: 'Suite 200',
        city: 'Springfield',
        state: 'IL',
        zipCode: '62701',
        ugDegree: 'MBBS',
        pgDegree: 'MD Cardiology',
        instituteName: 'Harvard Medical School',
        otherQualification: 'Fellowship in Cardiology',
        gender: 'Male',
        fees: 150,
        availability: 'Mon-Fri, 9am - 5pm',
        timeSlot: '30 minutes',
        experience: 10,
        patients: 25
    },
    {
        id: 2,
        name: 'Dr. Jane Smith',
        phone: '234-567-8901',
        email: 'jane.smith@example.com',
        specialization: 'Pediatrics',
        address1: '456 Oak St',
        address2: '',
        city: 'Shelbyville',
        state: 'IN',
        zipCode: '46176',
        ugDegree: 'MBBS',
        pgDegree: 'MD Pediatrics',
        instituteName: 'Stanford University',
        otherQualification: '',
        gender: 'Female',
        fees: 200,
        availability: 'Tue-Thu, 10am - 4pm',
        timeSlot: '20 minutes',
        experience: 8,
        patients: 30
    },
    {
        id: 3,
        name: 'Dr. Emily Jones',
        phone: '345-678-9012',
        email: 'emily.jones@example.com',
        specialization: 'Dermatology',
        address1: '789 Pine St',
        address2: 'Apt 5B',
        city: 'Capital City',
        state: 'CA',
        zipCode: '90210',
        ugDegree: 'MBBS',
        pgDegree: 'MD Dermatology',
        instituteName: 'Johns Hopkins University',
        otherQualification: 'Diploma in Dermatology',
        gender: 'Female',
        fees: 250,
        availability: 'Mon-Wed, 1pm - 6pm',
        timeSlot: '15 minutes',
        experience: 5,
        patients: 15
    }
];

const page: React.FC = () => {
    const router = useRouter();

    const viewPatients = (doctorId: number) => {
      router.push(`/admin/dashboard/all_doctors/${doctorId}/patients`);
    };

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
                {doctors.map((doctor) => (
                    <div key={doctor.id} className="grid items-center justify-center grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 px-1 bg-white border-b border-gray-200 py-2 rounded-lg shadow-sm">
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">{doctor.name}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden lg:block text-center">{doctor.city}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{doctor.experience} years</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis text-center">${doctor.fees}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{doctor.patients}</span>
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

export default page;
