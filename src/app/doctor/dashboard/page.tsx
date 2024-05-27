import React from 'react';
import PatientDetails from './PatientDetails';

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

    return (
        <div className="container mx-auto my-8">
            <PatientDetails patients={patients} doctor={doctorName} />
        </div>
    );
};

export default page;
