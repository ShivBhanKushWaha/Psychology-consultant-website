'use client'
import { Arrow } from '@assests';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
  const router = useRouter();
  const [doctorData, setDoctorData] = useState({
    name: '',
    phone: '',
    email: '',
    availability: [] as string[],
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    graduationDegree: '',
    postGraduationDegree: '',
    instituteName: '',
    otherQualification: '',
    gender: '',
    specialization: '',
    fees: '',
    timeSlot: '',
    password: '',
    confirmPassword: ''
  });

  const availableSlot: string[] = [
    "9 - 11 PM",
    "11 - 1 PM",
    "1 - 3 PM",
    "3 - 5 pm",
    "5 - 7 pm"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value
    });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setDoctorData((prevData) => {
      const newAvailability = checked
        ? [...prevData.availability, value]
        : prevData.availability.filter((slot) => slot !== value);
      return { ...prevData, availability: newAvailability };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(doctorData);
  };

  return (
    <div className="flex flex-col items-center justify-center sm:py-5 sm:my-10 py-2 my-4">
      <div className="rounded-xl border-[3px] border-[#6F42C1] shadow-[#6F42C1] shadow-2xl sm:py-8 sm:px-16 py-4">
        <h2 className="font-bold sm:text-5xl text-3xl text-center text-[#180259]">Register as a Doctor</h2>
        <div className="flex flex-col items-center justify-center sm:mt-8 mt-4">
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="name">Name :</label>
            <input placeholder='Enter Doctor Name' type="text" id="name" name="name" value={doctorData.name} className="outline-none sm:w-[80%] w-[70%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="phone">Phone :</label>
            <input placeholder='Phone Number' type="tel" id="phone" name="phone" value={doctorData.phone} className="outline-none sm:w-[80%] w-[70%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="email">Email :</label>
            <input placeholder='Valid Email' type="email" id="email" name="email" value={doctorData.email} className="outline-none sm:w-[80%] w-[70%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="specialization">Specialization :</label>
            <input placeholder='specialization' type="text" id="specialization" name="specialization" value={doctorData.specialization} className="outline-none sm:w-[75%] w-[60%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="address1">Address 1 :</label>
            <input placeholder='Permanent Address' type="text" id="address1" name="address1" value={doctorData.address1} className="outline-none sm:w-[80%] w-[70%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="address2">Address 2 :</label>
            <input placeholder='Current Address' type="text" id="address2" name="address2" value={doctorData.address2} className="outline-none sm:w-[80%] w-[70%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="city">City :</label>
            <input placeholder='City' type="text" id="city" name="city" value={doctorData.city} className="outline-none sm:w-[80%] w-[70%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="state">State :</label>
            <input placeholder='State' type="text" id="state" name="state" value={doctorData.state} className="outline-none sm:w-[80%] w-[70%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="zipCode">Zip Code :</label>
            <input placeholder='Postal Code' type="text" id="zipCode" name="zipCode" value={doctorData.zipCode} className="outline-none sm:w-[80%] w-[70%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="graduationDegree">UG Degree :</label>
            <input placeholder='UG' type="text" id="graduationDegree" name="graduationDegree" value={doctorData.graduationDegree} className="outline-none sm:w-[80%] w-[60%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="postGraduationDegree">PG Degree :</label>
            <input placeholder='PG' type="text" id="postGraduationDegree" name="postGraduationDegree" value={doctorData.postGraduationDegree} className="outline-none sm:w-[80%] w-[60%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="instituteName">Institute Name :</label>
            <input placeholder='Institute Name' type="text" id="instituteName" name="instituteName" value={doctorData.instituteName} className="outline-none sm:w-[70%] w-[35%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="otherQualification">Other Qualification :</label>
            <input placeholder='Other Qualification' type="text" id="otherQualification" name="otherQualification" value={doctorData.otherQualification} className="outline-none sm:w-[70%] w-[40%] " onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="gender">Gender :</label>
            <div className="relative mr-4 flex flex-row w-[70%] rounded-[5px] outline-none appearance-none text-[#7C7C7C]">
              <select id="gender" name="gender" value={doctorData.gender} onChange={handleChange} className="outline-none w-[90%] appearance-none text-[#7C7C7C] focus:outline-none">
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
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="fees">Fees :</label>
            <input placeholder='Fees per slot' type="text" id="fees" name="fees" className="outline-none sm:w-[80%] w-[70%] " value={doctorData.fees} onChange={handleChange} />
          </div>
          <div className="flex flex-col border-[3px] border-[#6F42C1] rounded-3xl items-start sm:gap-3 gap-2 p-5 bg-white h-auto sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label className="flex flex-row items-center justify-center">Availability:
              {doctorData.availability.length > 0 ? (
                <div className="flex sm:flex-row flex-col gap-y-2 sm:gap-y-0">
                  {doctorData.availability.map((slot) => (
                    <p key={slot} className="border-[2px] border-[#6F42C1] rounded-[5px] px-2 py-1 mx-1 bg-[#6F42C1] bg-opacity-10">
                      {slot}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="border-[2px] border-[#6F42C1] rounded-[5px] px-2 py-1 mx-1 bg-[#6F42C1] bg-opacity-10">
                  Select availability
                </p>
              )}</label>
            <div className="flex sm:flex-row flex-col sm:gap-x-8 gap-y-2 px-1">
              {availableSlot.map((slot) => (
                <label key={slot} className="flex flex-row items-center gap-x-1">
                  <input
                    type="checkbox"
                    value={slot}
                    checked={doctorData.availability.includes(slot)}
                    onChange={handleCheckboxChange}
                  />
                  {slot}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="timeSlot">Time Slot :</label>
            <input placeholder='Minutes per slot' type="text" id="timeSlot" name="timeSlot" className="outline-none sm:w-[80%] w-[70%] " value={doctorData.timeSlot} onChange={handleChange} />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="password">Password :</label>
            <input
              placeholder="Enter Password"
              type="password"
              id="password"
              name="password"
              value={doctorData.password}
              className="outline-none sm:w-[80%] w-[70%] "
              onChange={handleChange}
            />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[610px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="confirmPassword">Confirm Password :</label>
            <input
              placeholder="Confirm Password"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={doctorData.confirmPassword}
              className="outline-none sm:w-[70%] w-[50%] "
              onChange={handleChange}
            />
          </div>
          <div className="flex sm:flex-row flex-col mt-4 gap-1 text-[19px]">
            <p className="text-[#013A00]">Account already exists?</p>
            <button onClick={() => router.push('/doctor/signin')} className="text-[#6F42C1]">Click here to login</button>
          </div>
          <button onClick={handleSubmit} type="submit" className="bg-[#6F42C1] w-[50%] rounded-full text-white py-2 mt-8">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Page;
