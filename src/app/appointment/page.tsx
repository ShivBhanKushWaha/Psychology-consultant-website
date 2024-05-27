// pages/appointments.tsx
import React from 'react';
import {DoctorCard} from '@molecules';

const page = () => {
  const doctors = [
    {
      name: 'Shiv Prajapati',
      specialty: 'Cardiologist',
      experience: '10',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Abhay Sharma',
      specialty: 'Dermatologist',
      experience: '7',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Ayush Jaiswal',
      specialty: 'Pediatrician',
      experience: '5',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'You & Me',
      specialty: 'General Physician',
      experience: '15',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl text-center font-bold mb-8 text-[#6F42C1]">Available Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default page;
