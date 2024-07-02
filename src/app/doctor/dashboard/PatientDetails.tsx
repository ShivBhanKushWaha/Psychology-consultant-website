'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { PopUpModal } from '@molecules'; // Adjust the import path if necessary

interface PatientDetailsProp {
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

type PatientDetailsType = {
    patients: PatientDetailsProp[],
}

const PatientDetails: React.FC<PatientDetailsType> = ({ patients }) => {
    const router = useRouter();
    const [selectedPatient, setSelectedPatient] = useState<PatientDetailsProp | null>(null);

    return (
        <div className="px-4 py-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-center font-bold text-[#6F42C1] mb-4">Patient Details</h2>
            <div className="grid gap-6">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 bg-[#6F42C1] text-white font-medium uppercase text-xs tracking-wider py-3 px-6 rounded-t-lg">
                    <span className="text-start">Name</span>
                    <span className="hidden md:block text-center">Gender</span>
                    <span className="hidden md:block text-center">Appointment Date</span>
                    <span className="text-center">Symptoms</span>
                    {/* <span className="hidden md:block text-center">Status</span> */}
                    <span className="hidden md:block text-center">Action</span>
                    <span className="text-center">Call</span>
                </div>
                {patients.map((patient, index) => (
                    <div key={index} className="grid items-center justify-center grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 px-1 bg-white border-b border-gray-200 py-2 rounded-lg shadow-sm">
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">{patient.familyMember}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{patient.gender}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{patient.selectSlot}</span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full rounded-md bg-[#6F42C1] flex items-center justify-center">
                            <button
                                onClick={() => setSelectedPatient(patient)}
                                className="px-2 py-2 text-white hover:bg-opacity-75 whitespace-nowrap overflow-hidden overflow-ellipsis"
                            >
                                Details
                            </button>
                        </span>
                        {/* <span className="whitespace-nowrap overflow-hidden overflow-ellipsis hidden md:block text-center">{patient.status}</span> */}
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full hidden md:flex items-center justify-center rounded-md bg-[#6F42C1]">
                            <button
                                onClick={() => router.push(`/doctor/dashboard/${patient.id}`)}
                                className="px-2 py-2 text-white hover:bg-opacity-75 whitespace-nowrap overflow-hidden overflow-ellipsis"
                            >
                                Add Prescription
                            </button>
                        </span>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full flex items-center justify-center rounded-md bg-[#6F42C1]">
                            <button
                                onClick={() => router.push(`/doctor/dashboard/video_call/${patient.id}`)}
                                className="px-2 py-2 text-white hover:bg-opacity-75 whitespace-nowrap overflow-hidden overflow-ellipsis"
                            >
                                Call
                            </button>
                        </span>
                    </div>
                ))}
            </div>

            {selectedPatient && (
                <PopUpModal
                    isOpen={!!selectedPatient}
                    onClose={() => setSelectedPatient(null)}
                    title="Patient Details"
                >
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2 text-[#6F42C1]">{selectedPatient.familyMember}</h3>
                        <p><strong>Age:</strong> {selectedPatient.age}</p>
                        <p><strong>Gender:</strong> {selectedPatient.gender}</p>
                        <p><strong>Contact Number:</strong> {selectedPatient.contactNumber}</p>
                        <p><strong>History of Mental Issues:</strong> {selectedPatient.historyOfMentalIssue}</p>
                        <p><strong>Symptoms:</strong> {selectedPatient.symptoms}</p>
                        <p><strong>Diagnosis:</strong> {selectedPatient.diagnosis}</p>
                        <p><strong>Treatment:</strong> {selectedPatient.treatment}</p>
                        <p><strong>Which Family Member:</strong> {selectedPatient.whichFamilyMember}</p>
                        <p><strong>Symptoms of Patient:</strong> {selectedPatient.symptomsOfPatient}</p>
                        <p><strong>When Problem Started:</strong> {selectedPatient.whenProblemStart}</p>
                        <p><strong>Previous Treatment:</strong> {selectedPatient.previousPatientTreatment}</p>
                        <p><strong>Frequency of Symptoms:</strong> {selectedPatient.freqOfSymptoms}</p>
                        <p><strong>Trigger Point:</strong> {selectedPatient.triggerPoint}</p>
                        <p><strong>Capacity of Work:</strong> {selectedPatient.capacityOfWork}</p>
                        <p><strong>Sleep Properly:</strong> {selectedPatient.sleepProper}</p>
                        <p><strong>Time of Sleep:</strong> {selectedPatient.timeOfSleep}</p>
                        <p><strong>Eating Properly:</strong> {selectedPatient.eatingProperly}</p>
                        <p><strong>Interested to Do Something:</strong> {selectedPatient.interestedToDoSomething}</p>
                        <p><strong>Not Interested:</strong> {selectedPatient.notInterested}</p>
                        <p><strong>Self Time:</strong> {selectedPatient.selfTime}</p>
                        <p><strong>Not Self Time:</strong> {selectedPatient.notSelfTime}</p>
                        <p><strong>Doctor:</strong> {selectedPatient.doctor.name}</p>
                        <p><strong>Appointment Slot:</strong> {selectedPatient.selectSlot}</p>
                    </div>
                </PopUpModal>
            )}
        </div>
    );
};

export default PatientDetails;
