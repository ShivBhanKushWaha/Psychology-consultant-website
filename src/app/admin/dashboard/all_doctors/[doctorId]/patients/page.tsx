'use client'

'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { SERVER_BASE_URL } from '../../../../../../../Config';

// Define the Patient interface
// Define the Patient interface
interface Patient {
    id: number;
    familyMember: string;
    age: string;
    gender: string;
    contactNumber: string;
    historyOfMentalIssue: string;
    symptoms: string;
    diagnosis: string;
    treatment: string;
    whichFamilyMember: string;
    symptomsOfPatient: string;
    whenProblemStart: string;
    previousPatientTreatment: string;
    freqOfSymptoms: string;
    triggerPoint: string;
    capacityOfWork: string;
    sleepProper: string;
    timeOfSleep: string;
    eatingProperly: string;
    interestedToDoSomething: string;
    notInterested: string;
    selfTime: string;
    notSelfTime: string;
    doctorId: number;
    selectSlot: string;
}

// Define the Doctor interface
interface Doctor {
    id: number;
    name: string;
    phone: string;
    email: string;
    specialization: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipCode: string;
    ugDegree: string;
    pgDegree: string;
    instituteNamePg: string;
    instituteNameUg: string;
    otherQualification: string;
    gender: string;
    fees: number;
    availability: string[];
    experience: string;
    patientDetail: Patient[]; // Updated to match the server response
}


const Page: React.FC = () => {
    const params = useParams();
    const doctorId = parseInt(params.doctorId as string, 10);

    const [doctorData, setDoctorData] = useState<Doctor | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDoctorWithPatients = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${SERVER_BASE_URL}/doctorWithPatient/${doctorId}`);
                const data: Doctor = await response.data;
                console.log(data);
                setDoctorData(data);
                
            } catch (error: any) {
                console.error('Error fetching doctor and patients:', error);
            }
            finally{
                setLoading(false)
            }
        };

        fetchDoctorWithPatients();
    }, [doctorId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="px-4 py-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-center font-bold text-[#6F42C1] mb-4">
                Patients of Doctor: {doctorData?.name}
            </h2>
            <div className="grid gap-6">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 bg-[#6F42C1] text-white font-medium uppercase text-xs tracking-wider py-3 px-6 rounded-t-lg">
                    <span className="text-start">Name</span>
                    <span className="hidden md:block text-center">Gender</span>
                    <span className="hidden md:block text-center">Age</span>
                    <span className="text-center">booked Slot</span>
                    <span className="sm:text-center text-end">Symptoms</span>
                </div>
                {( doctorData?.patientDetail ?? []).length > 0 ? (
                    (doctorData?.patientDetail ?? []).map((patient) => (
                        <div key={patient.id} className="grid items-center justify-center grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 px-1 bg-white border-b border-gray-200 py-2 rounded-lg shadow-sm">
                            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">{patient.familyMember}</span>
                            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{patient.gender}</span>
                            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{patient.age}</span>
                            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis text-center">{patient.selectSlot == null ? "Not appointment" : patient.selectSlot}</span>
                            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis text-center">{patient.symptomsOfPatient}</span>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500 mt-6">
                        No patients found for this doctor.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;

