'use client'
import React, { useState } from 'react';

const page = () => {
  const [doctorData, setDoctorData] = useState({
    name: '',
    phone: '',
    email: '',
    availability: '',
    address: '',
    graduationDegree: '',
    instituteName: '',
    otherQualification: '',
    otherInstitute: '',
    gender: '',
    specialization: '',
    fees: '',
    timeSlot: ''
  });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value
    });
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    console.log(doctorData);
  };

  return (
    <div className="flex flex-col items-center justify-center py-5 my-10">
      <h2 className="font-bold text-5xl">Register as a Doctor</h2>
      <div onSubmit={handleSubmit}>
        <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name"  value={doctorData.name} onChange={handleChange} />
        </div>
        <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" className="remove-arrow outline-none md:w-[75%] w-3/4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder-text-[#1C1C1C]" value={doctorData.phone} onChange={handleChange} />
        </div>
        <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={doctorData.email} onChange={handleChange} />
        </div>
        <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
          <label htmlFor="availability">Availability:</label>
          <input type="text" id="availability" name="availability" value={doctorData.availability} onChange={handleChange} />
        </div>
        <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={doctorData.address} onChange={handleChange} />
        </div>
        <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
          <label htmlFor="graduationDegree">Graduation Degree:</label>
          <input type="text" id="graduationDegree" name="graduationDegree" value={doctorData.graduationDegree} onChange={handleChange} />
        </div>
        <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
          <label htmlFor="instituteName">Institute Name:</label>
          <input type="text" id="instituteName" name="instituteName" value={doctorData.instituteName} onChange={handleChange} />
        </div>
        <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
          <label htmlFor="otherQualification">Other Qualification:</label>
          <input type="text" id="otherQualification" name="otherQualification" value={doctorData.otherQualification} onChange={handleChange} />
        </div>
        <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
          <label htmlFor="otherInstitute">Other Institute:</label>
          <input type="text" id="otherInstitute" name="otherInstitute" value={doctorData.otherInstitute} onChange={handleChange} />
        </div>
        <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={doctorData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
          <label htmlFor="specialization">Specialization:</label>
          <input type="text" id="specialization" name="specialization" value={doctorData.specialization} onChange={handleChange} />
        </div>
        <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
          <label htmlFor="fees">Fees:</label>
          <input type="text" id="fees" name="fees" value={doctorData.fees} onChange={handleChange} />
        </div>
        <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
          <label htmlFor="timeSlot">Time Slot:</label>
          <input type="text" id="timeSlot" name="timeSlot" value={doctorData.timeSlot} onChange={handleChange} />
        </div>
        <button className="bg-[#6F42C1] rounded-full text-white px-6 py-2 mt-10">Register</button>
      </div>
    </div>
  );
}

export default page;
