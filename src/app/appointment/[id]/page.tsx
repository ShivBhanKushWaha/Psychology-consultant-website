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
  timeSlot: string;
}

const DoctorPage = () => {
  const { id } = useParams();
  console.log(id)
  const router = useRouter();
  // const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(false);
  // const [slots, setSlots] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const slots = [
    "09:00 - 09:30",
    "09:30 - 10:00",
    "10:00 - 10:30",
    "10:30 - 11:00",
    "11:00 - 11:30",
    "11:30 - 12:00",
    "12:00 - 12:30",
    "12:30 - 13:00",
    "13:00 - 13:30",
    "13:30 - 14:00",
    "14:00 - 14:30",
    "14:30 - 15:00",
    "15:00 - 15:30",
    "15:30 - 16:00",
    "16:00 - 16:30",
    "16:30 - 17:00"
  ]

  const doctor: Doctor = {
    id: 4,
    name: "Dr. Sarah Lee",
    specialization: "Dermatologist",
    experience: 12,
    gender: "Female",
    address1: "123 Birch St",
    city: "San Francisco",
    state: "CA",
    zipCode: "94101",
    phone: "(415) 234-5678",
    email: "sarah.lee@example.com",
    availability: "Wednesday to Sunday, 11 AM - 7 PM",
    fees: 130,
    ugDegree: "MBBS",
    pgDegree: "MD Dermatology",
    instituteNameUg: "University of California, Berkeley",
    instituteNamePg: "University of Southern California",
    timeSlot: "30 minutes"
  };
  

  // useEffect(() => {
  //   if (!id) return; // Guard against missing id

  //   setLoading(true);
  //   const fetchDoctor = async () => {
  //     try {
  //       const res = await axios.get(`${SERVER_BASE_URL}/doctor/${id}`);
  //       // setDoctor(res.data); // Assume res.data is the doctor object.
  //     } catch (error) {
  //       console.error("Error fetching doctor details:", error);
  //       toast.error("Failed to load doctor details");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchDoctor();
  // }, [id]);

  const handleConfirmClick = async () => {
    await fetchAvailableSlots();
    setShowModal(true);
  };

  const fetchAvailableSlots = async () => {
    try {
      const res = await axios.get(`${SERVER_BASE_URL}/doctor/${id}/available-slots`);
      // setSlots(res.data.slots);
    } catch (error) {
      console.error("Error fetching available slots:", error);
      toast.error("Failed to load available slots");
    }
  };

  const handleSlotSelect = async (slot: string) => {
    setShowModal(false);
    console.log(slot)
    try {
      // Send the selected slot to the server to book it
      const res = await axios.post(`${SERVER_BASE_URL}/appointment/book`, {
        doctorId: doctor?.id,
        slot,
      });
      toast.success('Slot booked successfully');

      // Generate Google Meet link and send email to user and doctor
      const meetRes = await axios.post(`${SERVER_BASE_URL}/appointment/generate-meet-link`, {
        appointmentId: res.data.appointmentId,
      });
      toast.success('Google Meet link sent to your email');

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
        <p><span className="font-bold">Email:</span> {doctor.email}</p>
        <p><span className="font-bold">Phone:</span> {doctor.phone}</p>
        <p><span className="font-bold">Address:</span> {`${doctor.address1}, ${doctor.address2 ? `${doctor.address2}, ` : ''}${doctor.city}, ${doctor.state} ${doctor.zipCode}`}</p>
        <p><span className="font-bold">Availability:</span> {doctor.availability}</p>
        <p><span className="font-bold">Consultation Fees:</span> ${doctor.fees}</p>
        <p><span className="font-bold">Time Slot:</span> {doctor.timeSlot}</p>
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
          slots={slots}
          onClose={() => setShowModal(false)}
          onSelectSlot={handleSlotSelect}
        />
      )}
    </div>
  );
};

export default DoctorPage;
