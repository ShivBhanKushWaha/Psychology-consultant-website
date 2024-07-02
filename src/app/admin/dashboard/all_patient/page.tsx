'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PopUpModal } from '@molecules'; // Adjust the import path if necessary
import axios from 'axios';
import { SERVER_BASE_URL } from '../../../../../Config';

// Define the Patient interface
interface Patient {
    id: number;
    familyMember: string;
    age: string;
    gender: string;
    contactNumber: string;
    historyOfMentalIssue: string;
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
    selectSlot: string;
    doctor: {
        name: string;
    };
}

const Page = () => {
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
    const [patients, setPatients] = useState<Patient[]>([]); // State to store patient data
    const [loading, setLoading] = useState(true); // State to manage loading
    const [error, setError] = useState<string | null>(null); // State to manage errors

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                // Assuming the token is stored in localStorage
                setLoading(true)
                

                const response = await axios.get(`${SERVER_BASE_URL}/patients`);

                setPatients(response.data); // Set the fetched data
                setLoading(false); // Set loading to false
            } catch (error) {
                console.error('Error fetching patient details:', error);
                setError('Failed to load patient details'); // Set error message
            }
            finally {
                setLoading(false)
            }
        };

        fetchPatients();
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
                <p className="text-red-500 text-center">{error}</p>
            </div>
        );
    }

    return (
        <div className="px-4 py-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-center font-bold text-[#6F42C1] mb-4">All Patient List</h2>
            <div className="grid gap-6">
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 bg-[#6F42C1] text-white font-medium uppercase text-xs tracking-wider py-3 px-6 rounded-t-lg">
                    <span className="text-start">Name</span>
                    <span className="hidden lg:block text-center">Gender</span>
                    <span className="hidden md:block text-center">Appointment Date</span>
                    <span className="text-center">Doctor</span>
                    <span className="hidden md:block text-center">Symptoms</span>
                    <span className="text-center">View Details</span>
                </div>
                {patients.map((patient) => (
                    <div key={patient.id} className="grid items-center justify-center grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 px-1 bg-white border-b border-gray-200 py-2 rounded-lg shadow-sm">
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis ml-4">{patient.familyMember}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden lg:block text-center">{patient.gender}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{patient.selectSlot}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis text-center">{patient.doctor.name}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{patient.symptomsOfPatient}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full items-center flex justify-center rounded-md bg-[#6F42C1]">
                            <button
                                onClick={() => setSelectedPatient(patient)}
                                className="px-2 py-2 text-white hover:bg-opacity-75 whitespace-nowrap overflow-hidden overflow-ellipsis "
                            >
                                View
                            </button>
                        </span>
                    </div>
                ))}
            </div>

            {/* Detailed Information Modal for the selected patient */}
            {selectedPatient && (
                <PopUpModal
                    isOpen={!!selectedPatient}
                    onClose={() => setSelectedPatient(null)}
                    title="Patient Details"
                >
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2 text-[#6F42C1]">{selectedPatient.familyMember}</h3>
                        <p className="mb-1"><strong>Gender:</strong> {selectedPatient.gender}</p>
                        <p className="mb-1"><strong>Age:</strong> {selectedPatient.age}</p>
                        <p className="mb-1"><strong>Contact Number:</strong> {selectedPatient.contactNumber}</p>
                        <p className="mb-1"><strong>Appointment Slot:</strong> {selectedPatient.selectSlot}</p>
                        <p className="mb-1"><strong>Symptoms:</strong> {selectedPatient.symptomsOfPatient}</p>
                        <p className="mb-1"><strong>When Problem Started:</strong> {selectedPatient.whenProblemStart}</p>
                        <p className="mb-1"><strong>Previous Patient Treatment:</strong> {selectedPatient.previousPatientTreatment}</p>
                        <p className="mb-1"><strong>Frequency of Symptoms:</strong> {selectedPatient.freqOfSymptoms}</p>
                        <p className="mb-1"><strong>Trigger Point:</strong> {selectedPatient.triggerPoint}</p>
                        <p className="mb-1"><strong>Capacity of Work:</strong> {selectedPatient.capacityOfWork}</p>
                        <p className="mb-1"><strong>Proper Sleep:</strong> {selectedPatient.sleepProper}</p>
                        <p className="mb-1"><strong>Time of Sleep:</strong> {selectedPatient.timeOfSleep}</p>
                        <p className="mb-1"><strong>Eating Properly:</strong> {selectedPatient.eatingProperly}</p>
                        <p className="mb-1"><strong>Interested to Do Something:</strong> {selectedPatient.interestedToDoSomething}</p>
                        <p className="mb-1"><strong>Not Interested:</strong> {selectedPatient.notInterested}</p>
                        <p className="mb-1"><strong>Self Time:</strong> {selectedPatient.selfTime}</p>
                        <p className="mb-1"><strong>Not Self Time:</strong> {selectedPatient.notSelfTime}</p>
                    </div>
                </PopUpModal>
            )}
        </div>
    );
};

export default Page;
