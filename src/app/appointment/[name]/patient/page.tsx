'use client'
import React, { useState } from 'react';

const Page = () => {
  const [patientDetails, setPatientDetails] = useState({
    memberName: '',
    age: '',
    gender: '',
    contact: '',
    mentalIsuue: '',
    symptoms: '',
    diagnosys: '',
    treatment: '',
    whichMember: '',
    symptomsOfPatient: '',
    startTime: '',
    prevPatientTreatment: '',
    feqOfSymptoms: '',
    triggerPoint: '',
    capacity: '',
    sleepProper: '',
    timeOfSleep: '',
    eatingProper: '',
    interestedDoSomeThing: '',
    notInterestedDoSomeThing: '',
    selfTime: '',
    notSelfTime: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name)
    console.log(value)
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle the form submission
    alert(`Patient Details:\nName: ${patientDetails.memberName}\nAge: ${patientDetails.age}\nGender: ${patientDetails.gender}\nContact: ${patientDetails.contact}`);
  };

  return (
    <div className="flex items-center justify-center my-5 mx-2">
      <div className="rounded-xl border-[3px] border-[#6F42C1] shadow-[#6F42C1] shadow-2xl sm:w-[70%] md:w-[65%] lg:w-1/2 w-full mx-auto sm:py-8 sm:px-16 py-3 px-2">
        <h1 className="text-2xl font-bold mb-4 text-[#6F42C1] text-center">Patient Details Form</h1>
        <div className="mb-4">
          <label htmlFor='memberName' className="block mb-1 text-gray-700">Family member:</label>
          <input
            id='memberName'
            type="text"
            name="memberName"
            value={patientDetails.memberName}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Age :</label>
          <input
            type="number"
            name="age"
            value={patientDetails.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Gender:</label>
          <input
            type="text"
            name="gender"
            value={patientDetails.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Contact Number:</label>
          <input
            type="text"
            name="contact"
            value={patientDetails.contact}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">History of mental Issue:</label>
          <select className="sm:w-2/3 w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {
          <div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Symptoms:</label>
              <input
                type="text"
                name="symptoms"
                value={patientDetails.symptoms}
                onChange={handleChange}
                className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Diagnosys:</label>
              <input
                type="text"
                name="diagnosys"
                value={patientDetails.diagnosys}
                onChange={handleChange}
                className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Treatment:</label>
              <input
                type="text"
                name="treatment"
                value={patientDetails.treatment}
                onChange={handleChange}
                className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Which Family member:</label>
              <input
                type="text"
                name="whichMember"
                value={patientDetails.whichMember}
                onChange={handleChange}
                className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
              />
            </div>
          </div>
        }
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Symptoms of patient:</label>
          <input
            type="text"
            name="symptomsOfPatient"
            value={patientDetails.symptomsOfPatient}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">When problem start:</label>
          <input type="date" className="sm:w-2/3 w-full px-3 py-2" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Previous Patient treatment:</label>
          <input
            type="text"
            name="prevPatientTreatment"
            value={patientDetails.prevPatientTreatment}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg outline-none focus:outline-none "
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Freq of symptoms:</label>
          <select className="sm:w-2/3 w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none">
            <option value="">Daily</option>
            <option value="">Monthly</option>
            <option value="">Yearly</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Trigger point:</label>
          <input
            type="text"
            name="triggerPoint"
            value={patientDetails.triggerPoint}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg outline-none focus:outline-none "
          />
        </div>


        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Capacity of work:</label>
          <input
            type="text"
            name="capacity"
            value={patientDetails.capacity}
            onChange={handleChange}
            className="w-full px-3 py-2 border active:outline-none rounded-lg outline-none focus:outline-none "
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Sleep proper:</label>
          <select className="sm:w-2/3 w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Time of sleep hourly:</label>
            <input
              type="text"
              name="timeOfSleep"
              value={patientDetails.timeOfSleep}
              onChange={handleChange}
              className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
            />
          </div>
        }
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Eating properly:</label>
          <select className="sm:w-2/3 w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Interested to do some thing</label>
          <select className="sm:w-2/3 w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Not Interested:</label>
            <input
              type="text"
              name="notInterestedDoSomeThing"
              value={patientDetails.notInterestedDoSomeThing}
              onChange={handleChange}
              className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
            />
          </div>
        }
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Quality time for themselves</label>
          <select className="sm:w-2/3 w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">No themselves:</label>
            <input
              type="text"
              name="notSelfTime"
              value={patientDetails.notSelfTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
            />
          </div>
        }
        <div className="flex flex-row justify-center items-center mt-3">
          <button
            onClick={handleSubmit}
            className=" bg-[#6F42C1] text-white px-6 py-2 rounded-lg outline-none focus:outline-none border-none hover:bg-opacity-70"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
