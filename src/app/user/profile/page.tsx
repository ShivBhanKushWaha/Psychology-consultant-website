import React from 'react'

const page = () => {
  const patient = {
    name: 'Shivbhan Kushwaha',
    age: 35,
    gender: 'Male',
    bloodType: 'O+',
    email: 't@gmail.com',
    phone: '116546633',
    address: '123 Main St, Anytown, USA',
    medicalHistory: [
      'Diabetes Type 2',
      'Hypertension',
      'Allergy to penicillin',
      'Stress & Anxiety'
    ],
    recentAppointments: [
      { date: '2024-05-10', reason: 'Routine Check-up' },
      { date: '2024-04-22', reason: 'Consultation for flu-like symptoms' },
    ],
  };

  return (
    <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl my-5">
      <div className="md:flex border border-[#6F42C1] rounded-xl shadow-xl mx-5">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-[#6F42C1] font-semibold">{patient.name}</div>
          <p className="mt-1 text-gray-600"><strong>Age:</strong> {patient.age}</p>
          <p className="mt-0.5 text-gray-600"><strong>Gender:</strong> {patient.gender}</p>
          <p className="mt-0.5 text-gray-600"><strong>Blood Type:</strong> {patient.bloodType}</p>
          <div className="mt-4">
            <p className="text-gray-600"><strong>Email:</strong> {patient.email}</p>
            <p className="text-gray-600"><strong>Phone:</strong> {patient.phone}</p>
            <p className="text-gray-600"><strong>Address:</strong> {patient.address}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-gray-800 font-semibold">Medical History</h3>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              {patient.medicalHistory.map((history, index) => (
                <li key={index}>{history}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-gray-800 font-semibold">Recent Appointments</h3>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              {patient.recentAppointments.map((appointment, index) => (
                <li key={index}>{appointment.date} - {appointment.reason}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page