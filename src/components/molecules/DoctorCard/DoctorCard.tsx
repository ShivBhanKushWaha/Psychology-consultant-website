'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

interface DoctorCardProps {
    doctor: {
        name: string;
        specialty: string;
        experience: string;
        image: string;
    };
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
    const router = useRouter();

    const handleGetAppointment = () => {
        router.push(`/appointment/${doctor.name.replace(/ /g, '-')}`);
    };

    return (
        <div className="border rounded-lg p-4 shadow-md">
            <img src={doctor.image} alt={doctor.name} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialty}</p>
            <p className="text-gray-600">{doctor.experience} years of experience</p>
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
