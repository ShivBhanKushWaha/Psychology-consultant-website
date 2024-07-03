'use client'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SERVER_BASE_URL } from '../../../../Config';
import { useAppContext } from '../../Context/context';
import { useRouter } from 'next/navigation';

// Define types based on your Prisma models
interface Appointment {
  id: number;
  doctorId: number;
  userId: number;
  date: Date;
  status?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PatientTreatment {
  id: number;
  treatment: string;
  patientId: number;
  doctorId: number;
  medication: string;
  therapies: string;
  userId: number;
}

interface ProfileProps {
  patient:PatientTreatment[],
  appointment:Appointment[]
}

const UserDetailsPage: React.FC<ProfileProps> = () => {
  const router = useRouter();
  const { resUserData, setResUserData, userType, setUserType } = useAppContext();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [patientTreatments, setPatientTreatments] = useState<PatientTreatment[]>([]);

  useEffect(() => {
    const getLoggedDetails = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get(`${SERVER_BASE_URL}/userDetails`, {
          headers: {
            authorization: token
          }
        });
        if (res) {
          const userData = res.data.details;
          setResUserData(userData);
          const userType = res.data.type;
          setUserType(userType);
          const treatments = res.data.patientTreatments || [];
          setPatientTreatments(treatments);
          const appointments = res.data.appointments || [];
          setAppointments(appointments);
        }
      } catch (error: any) {
        console.log('Error while fetching logged details', error.message);
      }
    };

    getLoggedDetails();
  }, []);

  if (userType !== 'user') {
    return (
      <div className="flex items-center justify-center min-h-screen flex-col">
        <p className="text-center text-xl">Create an account or login with email</p>
        <button onClick={() => router.push('/user/signin')} className="bg-[#6F42C1] rounded-full text-white w-60 px-6 py-2 mt-6">
          Click Here
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl my-5">
      <div className="md:flex border border-[#6F42C1] rounded-xl shadow-xl mx-5">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-[#6F42C1] font-semibold">{resUserData.name}</div>
          <p className="text-gray-600"><strong>Email:</strong> {resUserData.email}</p>
          <p className="text-gray-600"><strong>Phone:</strong> {resUserData.mobileNumber}</p>
          <div className="mt-4">
            <p className="mt-1 text-gray-600"><strong>Age:</strong> {resUserData.age == null ? "Not present" : resUserData.age}</p>
            <p className="mt-0.5 text-gray-600"><strong>Gender:</strong> {resUserData.gender == null ? "Not present" : resUserData.gender}</p>
          </div>

          {/* Render appointments */}
          <div className="mt-4">
            <h3 className="text-gray-800 font-semibold">Recent Appointments</h3>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              {appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <li key={appointment.id}>{new Date(appointment.date).toDateString()} - {appointment.status || 'Scheduled'}</li>
                ))
              ) : (
                <li>No appointments found</li>
              )}
            </ul>
          </div>

          {/* Render patient treatments */}
          <div className="mt-4">
            <h3 className="text-gray-800 font-semibold">Patient Treatments</h3>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              {patientTreatments.length > 0 ? (
                patientTreatments.map((treatment) => (
                  <li key={treatment.id}>{treatment.treatment} - {treatment.medication}</li>
                ))
              ) : (
                <li>No treatments found</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
