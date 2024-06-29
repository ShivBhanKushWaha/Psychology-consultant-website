'use client'
import React, { useEffect, useState } from 'react';
import PatientDetails from './PatientDetails';
import axios from 'axios';
import { SERVER_BASE_URL } from '../../../../Config';

const page = () => {
    const doctorName = 'Shiv Prajapati'
    const patients = [
        {   id:1,
            name: 'Shivbhan kushwaha',
            gender: 'male',
            age: 22,
            appointmentDate: '2022-11-25',
            email: 't@gmail.com',
            phone: '1116546633',
            diseases: 'Cold',
            status: 'consult'
        },
        {   id:2,
            name: 'Abhay Sharma',
            gender: 'male',
            age: 27,
            appointmentDate: '2022-12-03',
            email: 'Abhay@gmail.com',
            phone: '0174654540',
            diseases: 'Fever',
            status: 'Pending'
        },
        {   id:3,
            name: 'Ayush Jaiswal',
            gender: 'male',
            age: 27,
            appointmentDate: '2022-12-03',
            email: 'Ayush@gmail.com',
            phone: '017700056465',
            diseases: 'Fever',
            status: 'Pending'
        },
        {   id:4,
            name: 'You & Me',
            gender: 'female',
            age: 36,
            appointmentDate: '2022-12-03',
            email: 'Mam@gmail.com',
            phone: '017700606+50',
            diseases: 'Fever',
            status: 'Pending'
        }
    ];
    // const [patients, setPatients] = useState([]); // State to store patient data
    // const [loading, setLoading] = useState(true); // State to manage loading
    // const [error, setError] = useState<string | null>(null); // State to manage errors
    // console.log(patients)

    // Fetch data from the API
    // useEffect(() => {
    //     const fetchPatients = async () => {
    //         try {
    //             const response = await axios.get(`${SERVER_BASE_URL}/patients`); // Replace with your API endpoint
    //             setPatients(response.data); // Set the fetched data
    //             setLoading(false); // Set loading to false
    //         } catch (error) {
    //             console.error('Error fetching patient details:', error);
    //             setError('Failed to load patient details'); // Set error message
    //             setLoading(false); // Set loading to false
    //         }
    //     };

    //     fetchPatients(); // Call the function to fetch data
    // }, []); // Empty dependency array to run only once on mount

    // Handle loading and error states
    // if (loading) {
    //     return (
    //         <div className="flex justify-center items-center h-screen">
    //             <p>Loading...</p>
    //         </div>
    //     );
    // }
    // if (error) {
    //     return (
    //         <div className="flex justify-center items-center h-screen">
    //             <p className="text-red-500 text-lg">Error: {error}</p>
    //         </div>
    //     );
    // }

    return (
        <div className="container mx-auto my-8">
            <PatientDetails patients={patients} doctor={doctorName} />
        </div>
    );
};

export default page;
