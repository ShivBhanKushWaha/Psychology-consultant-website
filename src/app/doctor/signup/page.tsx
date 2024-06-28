'use client'
import { Arrow } from '@assests';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { SERVER_BASE_URL } from '../../../../Config';
import { useAppContext } from '../../Context/context';
const Page = () => {
  const router = useRouter();
  const { resUserData, setResUserData, userType, setUserType } = useAppContext()
  const [doctorData, setDoctorData] = useState({
    name: '',
    phone: '',
    email: '',
    specialization: '',
    experience: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    ugDegree: '',
    instituteNameUg: '',
    pgDegree: '',
    instituteNamePg: '',
    otherQualification: '',
    gender: '',
    fees: '',
    availabilityRanges: [] as string[],
    password: '',
    confirmPassword: ''
  });

  const availableSlot: string[] = [
    "09:00 AM - 11:00 AM",
    "11:00 AM - 01:00 PM",
    "01:00 PM - 03:00 PM",
    "03:00 PM - 05:00 PM",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value
    });
  };

  const handleCheckboxChange = (event: any) => {
    const { value, checked } = event.target;
    setDoctorData((prevData) => {
      const newAvailabilityRanges = checked
        ? [...prevData.availabilityRanges, value]
        : prevData.availabilityRanges.filter((slot) => slot !== value);
      return { ...prevData, availabilityRanges: newAvailabilityRanges };
    });
  };

  const handleSubmit = async () => {
    const emptyFields = Object.values(doctorData).filter(value => value === '');
    if (emptyFields.length > 0) {
      return toast.error('Please fill in all fields');
    }
    if (doctorData.password.length < 5) {
      toast.error('Passwords must be length of 5');
      return;
    }
    if (doctorData.password !== doctorData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {

      const doctorDataToSend = {
        ...doctorData,
        availability: doctorData.availabilityRanges, // Only send availability ranges
      };

      const res = await axios.post(`${SERVER_BASE_URL}/auth/registerDoctor`, doctorDataToSend);

      if (res) {
        toast.success('New doctor created successfully');
        router.push('/doctor/dashboard');
        console.log(res.data.doctor);
        console.log(res.data.token);
        setResUserData(res.data.doctor)
        setUserType('doctor')
        localStorage.setItem('token', res.data.token);
        router.push('/')
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error('Doctor Already exists')
      }
      else {
        toast.error('Something went wrong')
        console.log('error while signup new doctor', error.response)
      }
      console.log('error while signup new doctor', error)
    }
  };


  return (
    <div className="flex flex-col items-center justify-center sm:py-5 sm:my-10 py-2 my-4">
      <div className="rounded-xl border-[3px] border-[#6F42C1] shadow-[#6F42C1] shadow-2xl sm:py-8 sm:px-16 py-4">
        <h2 className="font-bold sm:text-5xl text-3xl text-center text-[#180259]">Register as a Doctor</h2>
        <div className="flex flex-col items-center justify-center sm:mt-8 mt-4">
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="name">Name :</label>
            <input placeholder='Enter Doctor Name' type="text" id="name" name="name" value={doctorData.name} className="outline-none sm:w-[80%] w-[70%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="phone">Phone :</label>
            <input placeholder='Phone Number' type="tel" id="phone" name="phone" value={doctorData.phone} className="outline-none sm:w-[80%] w-[70%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="email">Email :</label>
            <input placeholder='Valid Email' type="email" id="email" name="email" value={doctorData.email} className="outline-none sm:w-[80%] w-[70%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="specialization">Specialization :</label>
            <input placeholder='specialization' type="text" id="specialization" name="specialization" value={doctorData.specialization} className="outline-none sm:w-[75%] w-[50%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="experience">Experience :</label>
            <input placeholder='Experience in years' type="text" id="experience" name="experience" value={doctorData.experience} className="outline-none sm:w-[75%] w-[50%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="address1">Address 1 :</label>
            <input placeholder='Permanent Address' type="text" id="address1" name="address1" value={doctorData.address1} className="outline-none sm:w-[80%] w-[60%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="address2">Address 2 :</label>
            <input placeholder='Current Address' type="text" id="address2" name="address2" value={doctorData.address2} className="outline-none sm:w-[80%] w-[60%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="city">City :</label>
            <input placeholder='City' type="text" id="city" name="city" value={doctorData.city} className="outline-none sm:w-[80%] w-[70%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="state">State :</label>
            <input placeholder='State' type="text" id="state" name="state" value={doctorData.state} className="outline-none sm:w-[80%] w-[70%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="zipCode">Zip Code :</label>
            <input placeholder='Postal Code' type="text" id="zipCode" name="zipCode" value={doctorData.zipCode} className="outline-none sm:w-[80%] w-[60%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="ugDegree">UG Degree :</label>
            <input placeholder='UG' type="text" id="ugDegree" name="ugDegree" value={doctorData.ugDegree} className="outline-none sm:w-[80%] w-[60%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="instituteNameUg">Institute (UG) :</label>
            <input placeholder='Institute (UG)' type="text" id="instituteNameUg" name="instituteNameUg" value={doctorData.instituteNameUg} className="outline-none sm:w-[70%] w-[35%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="pgDegree">PG Degree :</label>
            <input placeholder='PG' type="text" id="pgDegree" name="pgDegree" value={doctorData.pgDegree} className="outline-none sm:w-[80%] w-[60%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="instituteNamePg">Institute (PG) :</label>
            <input placeholder='Institute (PG)' type="text" id="instituteNamePg" name="instituteNamePg" value={doctorData.instituteNamePg} className="outline-none sm:w-[70%] w-[35%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="otherQualification">Other Qualification :</label>
            <input placeholder='Other Qualification' type="text" id="otherQualification" name="otherQualification" value={doctorData.otherQualification} className="outline-none sm:w-[70%] w-[40%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="gender">Gender :</label>
            <div className="relative mr-4 flex flex-row w-[60%] rounded-[5px] outline-none appearance-none text-[#7C7C7C]">
              <select id="gender" name="gender" value={doctorData.gender} onChange={handleChange} className="outline-none w-[90%] appearance-none text-[#7C7C7C] focus:outline-none px-2">
                <option value="" className="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Image src={Arrow} alt='Down Arrow' className="rotate-90" />
              </div>
            </div>
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="fees">Fees :</label>
            <input placeholder='Fees per slot' type="text" id="fees" name="fees" className="outline-none sm:w-[80%] w-[70%] " value={doctorData.fees} onChange={handleChange} />
          </div>
          {/* <div className="flex flex-col border-[3px] border-[#6F42C1] rounded-3xl items-start sm:gap-3 gap-2 p-3 bg-white h-auto sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label className="flex flex-row items-center justify-center">Availability Ranges:
              {doctorData.availabilityRanges.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-y-2 grid-cols-1">
                  {doctorData.availabilityRanges.map((slot) => (
                    <p key={slot} className="border-[2px] border-[#6F42C1] rounded-[5px] px-1 py-1 mx-1 bg-[#6F42C1] bg-opacity-10">
                      {slot}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="border-[2px] border-[#6F42C1] rounded-[5px] px-2 py-1 mx-1 bg-[#6F42C1] bg-opacity-10">
                  Select availability Ranges
                </p>
              )}</label>
            <div className="grid grid-cols-1 gap-y-2 px-1">
              {availableSlot.map((slot) => (
                <label key={slot} className="flex flex-row items-center gap-x-1">
                  <input
                    type="checkbox"
                    value={slot}
                    checked={doctorData.availabilityRanges.includes(slot)}
                    onChange={handleCheckboxChange}
                  />
                  {slot}
                </label>
              ))}
            </div>
          </div> */}
          <div className="flex flex-col border-[3px] border-[#6F42C1] rounded-3xl items-start sm:gap-3 gap-2 p-3 bg-white h-auto sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label className="flex flex-row items-center justify-center">Availability Ranges:
              {doctorData.availabilityRanges.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-y-2 grid-cols-1">
                  {doctorData.availabilityRanges.map((slot) => (
                    <p key={slot} className="border-[2px] border-[#6F42C1] rounded-[5px] px-1 py-1 sm:mx-5 mx-2 bg-[#6F42C1] bg-opacity-10">
                      {slot}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="border-[2px] border-[#6F42C1] rounded-[5px] px-2 py-1 mx-1 bg-[#6F42C1] bg-opacity-10">
                  Select availability ranges
                </p>
              )}
            </label>
            <div className="grid grid-cols-1 gap-y-2 px-1">
              {availableSlot.map((slot) => (
                <label key={slot} className="flex flex-row items-center gap-x-2">
                  <input
                    type="checkbox"
                    value={slot}
                    checked={doctorData.availabilityRanges.includes(slot)}
                    onChange={handleCheckboxChange}
                  />
                  {slot}
                </label>
              ))}
            </div>
          </div>

          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="password">Password :</label>
            <input
              placeholder="Enter Password"
              type="password"
              id="password"
              name="password"
              value={doctorData.password}
              className="outline-none sm:w-[80%] w-[60%] "
              onChange={handleChange}
            />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-2 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="confirmPassword">Confirm Password :</label>
            <input
              placeholder="C Password"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={doctorData.confirmPassword}
              className="outline-none sm:w-[70%] w-[40%] "
              onChange={handleChange}
            />
          </div>
          <div className="flex sm:flex-row flex-col mt-4 gap-1 text-[19px]">
            <p className="text-[#013A00]">Account already exists?</p>
            <button onClick={() => router.push('/doctor/signin')} className="text-[#6F42C1]">Click here to login</button>
          </div>
          <button onClick={() => handleSubmit()} type="submit" className="bg-[#6F42C1] w-[50%] rounded-full text-white py-2 mt-8">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Page;
