'use client'
import React, { useState } from 'react';

const Page = () => {
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle the form submission
    alert(`Patient Details:\nName: ${patientDetails.name}\nAge: ${patientDetails.age}\nGender: ${patientDetails.gender}\nContact: ${patientDetails.contact}`);
  };

  return (
    <div className="flex items-center justify-center my-5">
      <div className="rounded-xl border-[3px] border-[#6F42C1] shadow-[#6F42C1] shadow-2xl sm:w-[50%] w-full mx-auto sm:py-8 sm:px-16 py-3 px-2">
        <h1 className="text-2xl font-bold mb-4 text-[#6F42C1] text-center">Patient Details Form</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={patientDetails.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Age:</label>
          <input
            type="number"
            name="age"
            value={patientDetails.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Gender:</label>
          <select
            name="gender"
            value={patientDetails.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg outline-none focus:outline-none "
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contact:</label>
          <input
            type="text"
            name="contact"
            value={patientDetails.contact}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg outline-none focus:outline-none "
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-[#6F42C1] text-white px-4 py-2 rounded-lg outline-none focus:outline-none border-none hover:bg-opacity-70"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page;
