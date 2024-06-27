'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

interface DoctorCardProps {
    doctor: {
        id:any;
        name: string;
        image: string;
        state: string;
        specialization: string;
        city: string;
        experience: number;
        fees: string;
    };
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
    const router = useRouter();

    const handleGetAppointment = () => {
        router.push(`/appointment/${doctor.id}`);
    };

    return (
        <div className="border rounded-lg p-4 shadow-md">
            <img src="https://via.placeholder.com/150" alt={doctor.name} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialization}</p>
            <p className="text-gray-600">{doctor.experience} years of experience</p>
            <p className="text-gray-600">{doctor.city} {doctor.state}</p>
            <p className="text-gray-600">{doctor.fees} Rs. per appointment</p>
            <button
                onClick={handleGetAppointment}
                className="mt-4 px-4 py-2 bg-[#6F42C1] text-white rounded-md hover:bg-opacity-60"
            >
                Get Appointment
            </button>
        </div>
    );
};

export default DoctorCard;
