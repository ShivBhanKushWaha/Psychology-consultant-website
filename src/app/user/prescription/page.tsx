'use client';
import { Logo } from '@assests';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const page = () => {
  const router = useRouter();
  const params = useParams();

  const patient = {
    id: 1,
    name: 'Shivbhan Kushwaha',
    gender: 'male',
    age: 22,
    appointmentDate: '2022-11-25',
    email: 't@gmail.com',
    phone: '116546633',
    diseases: 'Stress & Anxiety',
    status: 'consult',
    prescription: {
      treatment: 'Rest and hydration, use of saline nasal spray, and over-the-counter cold medication as needed.',
      mediation: 'Paracetamol 500mg, twice a day for fever.',
      therapies: 'Steam inhalation twice a day to relieve nasal congestion.',
    },
    doctorName: 'Dr. Shiv Prajapati',
  }


  return (
    <div className="px-4 py-6 bg-white rounded-lg shadow-2xl max-w-3xl mx-auto mt-8">
      <div className="flex flex-col items-center mb-6">
        <Image alt="logo" src={Logo} className="w-32 h-auto mb-4" />
        <h2 className="text-2xl font-bold text-[#6F42C1] text-center">Prescription Details for {patient.name}</h2>
      </div>
      <div className="border border-[#6F42C1] rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <div>
            <p className="text-lg font-semibold text-[#6F42C1]">Doctor:</p>
            <p className="text-lg">{patient.doctorName}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-[#6F42C1]">Appointment Date:</p>
            <p className="text-lg">{patient.appointmentDate}</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold text-[#6F42C1]">Patient Information</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 gap-y-2 mt-2">
            <p className="text-lg">Name: {patient.name}</p>
            <p className="text-lg">Gender: {patient.gender}</p>
            <p className="text-lg">Age: {patient.age}</p>
            <p className="text-lg">Phone: {patient.phone}</p>
            <p className="text-lg">Email: {patient.email}</p>
            <p className="text-lg">Diseases: {patient.diseases}</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold text-[#6F42C1]">Prescription</p>
          <div className="mt-2">
            <p className="text-lg"><strong>Treatment:</strong> {patient.prescription.treatment}</p>
            <p className="text-lg mt-2"><strong>Mediation:</strong> {patient.prescription.mediation}</p>
            <p className="text-lg mt-2"><strong>Therapies:</strong> {patient.prescription.therapies}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="px-6 py-2 bg-[#6F42C1] text-white rounded-md hover:bg-opacity-75"
            onClick={() => router.back()}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
