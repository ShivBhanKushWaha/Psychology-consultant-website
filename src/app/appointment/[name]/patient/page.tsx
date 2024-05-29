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
          <label className="block text-gray-700">Family member:</label>
          <input
            type="text"
            name="name"
            value={patientDetails.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">History of mental Issue:</label>
          <select>
            <option value="">Yes</option>
            <option value="">No</option>
          </select>
        </div>
        {
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">Symptoms:</label>
              <input
                type="text"
                name="name"
                value={patientDetails.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Diagnosys:</label>
              <input
                type="text"
                name="name"
                value={patientDetails.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Treatment:</label>
              <input
                type="text"
                name="name"
                value={patientDetails.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Which Family member:</label>
              <input
                type="text"
                name="name"
                value={patientDetails.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
              />
            </div>
          </div>
        }
        <div className="mb-4">
          <label className="block text-gray-700">Symptoms of patient:</label>
          <input
            type="number"
            name="age"
            value={patientDetails.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">When problem start:</label>
          <input type="date" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Previous Patient treatment:</label>
          <input
            type="text"
            name="contact"
            value={patientDetails.contact}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg outline-none focus:outline-none "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Freq of symptoms:</label>
          <select>
            <option value="">Daily</option>
            <option value="">Monthly</option>
            <option value="">Yearly</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Trigger point:</label>
          <input
            type="text"
            name="contact"
            value={patientDetails.contact}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg outline-none focus:outline-none "
          />
        </div>
        
        
        <div className="mb-4">
          <label className="block text-gray-700">Capacity of work:</label>
          <input
            type="text"
            name="contact"
            value={patientDetails.contact}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg outline-none focus:outline-none "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Sleep proper:</label>
          <select>
            <option value="">Yes</option>
            <option value="">No</option>
          </select>
        </div>
        {
          <div className="mb-4">
            <label className="block text-gray-700">Time of sleep hourly:</label>
            <input
                type="text"
                name="name"
                value={patientDetails.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
              />
          </div>
        }
        <div className="mb-4">
          <label className="block text-gray-700">Eating properly:</label>
          <select>
            <option value="">Yes</option>
            <option value="">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Interested to do some thing</label>
          <select>
            <option value="">Yes</option>
            <option value="">No</option>
          </select>
        </div>
        {
          <div className="mb-4">
            <label className="block text-gray-700">Not Interested:</label>
            <input
                type="text"
                name="name"
                value={patientDetails.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
              />
          </div>
        }
        <div className="mb-4">
          <label className="block text-gray-700">Quality time for themselves</label>
          <select>
            <option value="">Yes</option>
            <option value="">No</option>
          </select>
        </div>
        {
          <div className="mb-4">
            <label className="block text-gray-700">No themselves:</label>
            <input
                type="text"
                name="name"
                value={patientDetails.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
              />
          </div>
        }
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
