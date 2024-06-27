'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SERVER_BASE_URL } from '../../../../../Config';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
// Define the PatientDetails interface
interface PatientDetails {
  doctorId: string;
  memberName: string;
  age: string;
  gender: string;
  contact: string;
  mentalIssue: string;
  symptoms: string;
  diagnosis: string;
  treatment: string;
  whichMember: string;
  symptomsOfPatient: string;
  startTime: string;
  prevPatientTreatment: string;
  freqOfSymptoms: string;
  triggerPoint: string;
  capacity: string;
  sleepProper: string;
  timeOfSleep: string;
  eatingProper: string;
  interestedDoSomething: string;
  notinterestedDoSomething: string;
  selfTime: string;
  notSelfTime: string;
}

type PatientDetailsKeys = keyof PatientDetails;

const Page = () => {
  const {id} = useParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [patientDetails, setPatientDetails] = useState<PatientDetails>({
    doctorId: '',
    memberName: '',
    age: '',
    gender: '',
    contact: '',
    mentalIssue: 'no',
    symptoms: '',
    diagnosis: '',
    treatment: '',
    whichMember: '',
    symptomsOfPatient: '',
    startTime: '',
    prevPatientTreatment: '',
    freqOfSymptoms: 'daily',
    triggerPoint: '',
    capacity: '',
    sleepProper: 'yes',
    timeOfSleep: '',
    eatingProper: '',
    interestedDoSomething: 'yes',
    notinterestedDoSomething: '',
    selfTime: 'yes',
    notSelfTime: ''
  });
  console.log(patientDetails)

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name,value)
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Set the doctorId to the extracted 'id' from the URL when the component mounts or 'id' changes
  useEffect(() => {
    if (id) {
      setPatientDetails((prevDetails) => ({
        ...prevDetails,
        doctorId: id as string, // Ensuring id is a string type
      }));
    }
  }, [id]);

  const handleSubmit = async () => {
    const requiredFields: PatientDetailsKeys[] = ['memberName', 'age', 'gender', 'contact', 'symptomsOfPatient','triggerPoint','capacity'];
    for (let field of requiredFields) {
      if (!patientDetails[field]) {
        setError(`The field "${field}" is required.`);
        return;
      }
    }
    setLoading(true)
    try {
      // Use SERVER_BASE_URL if it's defined
      const res = await axios.post(`${SERVER_BASE_URL}/patient/details`, patientDetails);
      router.push('/')
      toast.success('Doctor will contact soon!')
    } catch (error: any) {
      console.error("Error sending patient details:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">Error: {error}</p>
      </div>
    );
  }

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
          <select id="gender" name="gender" value={patientDetails.gender} onChange={handleChange} className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none">
            <option value="" className="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
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
          <select onChange={handleChange} name='mentalIssue' className="sm:w-2/3 w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        {patientDetails.mentalIssue == 'yes' && <>

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
              <label className="block mb-1 text-gray-700">diagnosis:</label>
              <input
                type="text"
                name="diagnosis"
                value={patientDetails.diagnosis}
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
        </>
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
          <input id='startTime' name='startTime' onChange={handleChange} type="date" className="sm:w-2/3 w-full px-3 py-2" />
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
          <select onChange={handleChange} id='freqOfSymptoms' name='freqOfSymptoms' className="sm:w-2/3 w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none">
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
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
          <select onChange={handleChange} name='sleepProper' className="sm:w-2/3 w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {patientDetails.sleepProper == "no" && <>
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
        </>
        }
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Eating properly:</label>
          <select onChange={handleChange} id='eatingProper' name='eatingProper' className="sm:w-2/3 w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Interested to do some thing</label>
          <select onChange={handleChange} name='interestedDoSomething' className="sm:w-2/3 w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {
          patientDetails.interestedDoSomething == "no" && <>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Not Interested:</label>
              <input
                type="text"
                name="notinterestedDoSomething"
                value={patientDetails.notinterestedDoSomething}
                onChange={handleChange}
                className="w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none"
              />
            </div>
          </>
        }
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Quality time for themselves</label>
          <select onChange={handleChange} name='selfTime' className="sm:w-2/3 w-full px-3 py-2 border active:outline-none rounded-lg focus:outline-none">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {
          patientDetails.selfTime == "no" && <>
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
          </>
        }
        <div className="flex flex-row justify-center items-center mt-3">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`bg-[#6F42C1] text-white px-6 py-2 rounded-lg outline-none focus:outline-none border-none hover:bg-opacity-70 ${loading ? "transition bg-[#c3b4e0] cursor-not-allowed" : ""
              }`}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Page;
