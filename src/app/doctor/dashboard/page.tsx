'use client'
import React, { useEffect, useState } from 'react';
import PatientDetails from './PatientDetails';
import axios from 'axios';
import { SERVER_BASE_URL } from '../../../../Config';
import { useParams, useRouter } from 'next/navigation';
import { useAppContext } from '../../Context/context';
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

const page = () => {
    const router = useRouter()
    const [patients, setPatients] = useState<Patient[]>([]); // State to store patient data
    const [loading, setLoading] = useState(true); // State to manage loading
    const [error, setError] = useState<string | null>(null); // State to manage errors
    const { resUserData, setResUserData, userType, setUserType } = useAppContext();

    useEffect(() => {
        const fetchDoctorWithPatients = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${SERVER_BASE_URL}/doctorWithPatient/${resUserData.id}`);
                const data = await response.data;
                console.log(data);
                setPatients(data.patientDetail);
                // setLoading(false);
            } catch (error: any) {
                console.error('Error fetching doctor and patients:', error);
                setError('Failed to load the patient details')
            }
            finally{
                setLoading(false)
            }
        };

        if(resUserData?.id && userType == 'doctor'){
            fetchDoctorWithPatients();
        }
    }, [ resUserData?.id]);

    if (userType != 'doctor') {
        return (
          <div className="flex items-center justify-center min-h-screen flex-col ">
            <p className="text-center text-2xl">You are not a Doctor</p>
            <p className="text-center text-xl">First login as a doctor</p>
            <button onClick={() => router.push('/doctor/signin')} className="bg-[#6F42C1] rounded-full text-white w-60 px-6 py-2 mt-6">
            Click Here
            </button>
          </div>
        )
      }

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
                <p className="text-red-500 text-lg text-center">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-8">
            <PatientDetails patients={patients} />
        </div>
    );
};

export default page;
