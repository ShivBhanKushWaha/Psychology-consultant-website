// pages/appointments.tsx
'use client'
import React, { useEffect, useState } from 'react';
import { DoctorCard } from '@molecules';
import axios from 'axios';
import { SERVER_BASE_URL } from '../../../Config';

const page = () => {

  const [doctorsList, setDoctorsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {

    const fetchDoctorList = async () => {
      setLoading(true)
      try {
        // Use SERVER_BASE_URL if it's defined
        const res = await axios.get(`${SERVER_BASE_URL}/doctorList`);
        setDoctorsList(res.data);
        console.log('Fetched doctors:', res.data);
      } catch (error: any) {
        console.error("Error fetching doctors:", error);
        setError(error.message);
      } finally {
        setLoading(false);
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

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Error loading doctors: {error}</p>
      </div>
    );
  }


  if (!doctorsList) {
    <div className="flex justify-center items-center h-screen">
      <p>No Doctor Available</p>
    </div>
  }

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl text-center font-bold mb-8 text-[#6F42C1]">Available Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2">
        {doctorsList.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default page;


