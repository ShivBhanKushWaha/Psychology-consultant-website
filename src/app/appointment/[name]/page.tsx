'use client'
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const page = () => {
  const { name } = useParams();
const router = useRouter()
  // Mock data for the example, you can fetch real data based on `name`
  const doctor = {
    name: name ? name : 'Doctor',
    specialty: 'Specialty',
    experience: 'Experience',
    details: 'Some detailed information about the doctor.',
    image: 'https://via.placeholder.com/150'
  };
  const SubmitDetails = () => {
    toast.success('Details send')
    router.push(`/appointment/${name}/patient`)
  }
  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col items-center">
        <img src={doctor.image} alt={'doctor'} className="w-48 h-48 object-cover rounded-full mb-4" />
        <h2 className="text-3xl font-bold text-[#6F42C1]">{doctor.name}</h2>
        <p className="text-gray-600">{doctor.specialty}</p>
        <p className="text-gray-600">{doctor.experience} years of experience</p>
        <p className="text-gray-600 mt-4">{doctor.details}</p>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => SubmitDetails()}
          className="mt-4 px-4 py-2 bg-[#6F42C1] text-white rounded-md hover:bg-opacity-60"
        >
          Patients Details
        </button>
      </div>
    </div>
  );
};

export default page;
