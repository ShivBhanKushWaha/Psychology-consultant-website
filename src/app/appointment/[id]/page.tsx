// pages/appointments/[id].tsx
'use client'
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';
import { SERVER_BASE_URL } from '../../../../Config';
import { SlotModal } from '@molecules';
interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  gender: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  availability: string;
  fees: number;
  ugDegree: string;
  pgDegree: string;
  otherQualification?: string;
  instituteNameUg: string;
  instituteNamePg: string;
  unBookedSlote:string[]
}

const DoctorPage = () => {
  const { id } = useParams();
  console.log(id)
  const router = useRouter();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  console.log(doctor)
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!id) return; // Guard against missing id

    setLoading(true);
    const fetchDoctor = async () => {
      try {
        const res = await axios.get(`${SERVER_BASE_URL}/doctor/${id}`);
        setDoctor(res.data); // Assume res.data is the doctor object.
      } catch (error) {
        console.error("Error fetching doctor details:", error);
        toast.error("Failed to load doctor details");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  const handleConfirmClick = async () => {
    setShowModal(true);
  };


  const handleSlotSelect = async (slot: string) => {
    setShowModal(false);
    console.log(slot)
    try {
      localStorage.setItem('selectSlot',slot)
      router.push(`/appointment/${doctor?.id}/patient`);
    } catch (error) {
      console.error("Error booking slot:", error);
      toast.error("Failed to book slot");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Doctor not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col items-center">
        <img src="https://via.placeholder.com/150" alt={doctor.name} className="w-48 h-48 object-cover rounded-full mb-4" />
        <h2 className="text-3xl font-bold text-[#6F42C1]">{doctor.name}</h2>
        <p className="text-gray-600">{doctor.specialization}</p>
        <p className="text-gray-600">{doctor.experience} years of experience</p>
      </div>
      <div className="mt-6 space-y-4 text-center">
        <p><span className="font-bold">Gender:</span> {doctor.gender}</p>
        <p><span className="font-bold">Address:</span> {`${doctor.address1}, ${doctor.address2 ? `${doctor.address2}, ` : ''}${doctor.city}, ${doctor.state} ${doctor.zipCode}`}</p>
        <p><span className="font-bold">Consultation Fees:</span> {doctor.fees} Rs.</p>
        <p><span className="font-bold">Undergraduate Degree:</span> {doctor.ugDegree}</p>
        <p><span className="font-bold">Postgraduate Degree:</span> {doctor.pgDegree}</p>
        {doctor.otherQualification && <p><span className="font-bold">Other Qualifications:</span> {doctor.otherQualification}</p>}
        <p><span className="font-bold">Pg Institute Name:</span> {doctor.instituteNamePg}</p>
        <p><span className="font-bold">Ug Institute Name:</span> {doctor.instituteNameUg}</p>
      </div>
      <div className="flex items-center justify-center mt-8">
        <button
          onClick={handleConfirmClick}
          className="px-4 py-2 bg-[#6F42C1] text-white rounded-md hover:bg-opacity-60"
        >
          Confirm Slot
        </button>
      </div>
      {showModal && (
        <SlotModal
          slots={doctor.unBookedSlote}
          onClose={() => setShowModal(false)}
          onSelectSlot={handleSlotSelect}
        />
      )}
    </div>
  );
};

export default DoctorPage;
