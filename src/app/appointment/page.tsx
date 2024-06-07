// pages/appointments.tsx
'use client'
import React, { useEffect, useState } from 'react';
import { DoctorCard } from '@molecules';
import axios from 'axios';
import { SERVER_BASE_URL } from '../../../Config';

const page = () => {

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchDoctorList = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`${SERVER_BASE_URL}/doctorList`);
        setDoctors(res.data); // Assume res.data is the list of doctors.
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false)
      }
    };

    fetchDoctorList();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

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
function getDoctorList() {
  throw new Error('Function not implemented.');
}

