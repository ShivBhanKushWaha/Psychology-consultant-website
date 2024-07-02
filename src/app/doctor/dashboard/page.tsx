'use client'
import React, { useEffect, useState } from 'react';
import PatientDetails from './PatientDetails';
import axios from 'axios';
import { SERVER_BASE_URL } from '../../../../Config';
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
    doctor: {
        name: string;
    };
}

const page = () => {
    const [patients, setPatients] = useState<Patient[]>([]); // State to store patient data
    const [loading, setLoading] = useState(true); // State to manage loading
    const [error, setError] = useState<string | null>(null); // State to manage errors

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(false); // Set loading to false
                const response = await axios.get(`${SERVER_BASE_URL}/patients`);
                const patientData = await response.data;
                setPatients(patientData);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load patient and doctor details'); // Set error message
            }
            finally{
                setLoading(false)
            }
        };

        fetchData(); // Call the function to fetch data
    }, []); // Empty dependency array to run only once on mount

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
