'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { SERVER_BASE_URl } from '../../../../Config';

const page = () => {
  const router = useRouter();
  const [doctorData, setDoctorData] = useState({
    phone: '',
    email: '',
    password: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value
    });
  };

    const handleSubmit = async () => {
      if(doctorData.email === '' || doctorData.phone === '' || doctorData.password === ''){
        return toast.error('Fill the form properly')
    }

    if(doctorData.phone.length != 10){
        return toast.error('Invalid mobile number')
    }

    if(doctorData.password.length < 5){
        return toast.error('Password must be length of 5')
    }
      try {
        const res = await axios.post(`${SERVER_BASE_URl}/auth/signinDoctor`, doctorData);
  
        if (res) {
          toast.success('Signin success')
          router.push('/doctor/dashboard')
          console.log(res.data.doctor);
          console.log(res.data.token);
          localStorage.setItem('DoctorToken', res.data.token);
          router.push('/')
        }
      } catch (error: any) {
        if (error.response && error.response.status === 400) {
          toast.error('Doctor not  exists')
        }
        else {
          toast.error('Something went wrong')
          console.log('error while signin doctor', error.response)
        }
        console.log('error while signin doctor', error)
      }
    };

  return (
    <div className="flex flex-col items-center justify-center sm:py-5 sm:my-10 py-2 my-4">
      <div className="rounded-xl border-[3px] border-[#6F42C1] shadow-[#6F42C1] shadow-2xl sm:py-8 sm:px-16 py-4">
        <h2 className="font-bold sm:text-5xl text-3xl text-center text-[#180259]">
          Signin as a Doctor
        </h2>
        <div className="flex flex-col items-center justify-center sm:mt-8 mt-4">
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[510px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="phone">Phone :</label>
            <input
              placeholder="Phone Number"
              type="number"
              id="phone"
              name="phone"
              value={doctorData.phone}
              className="outline-none sm:w-[80%] w-[70%] remove-arrow md:w-[85%] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder-text-[#1C1C1C]"
              onChange={handleChange}
            />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[510px] sm:pr-3 pr-1 w-[90%] mt-5">
            <label htmlFor="email">Email :</label>
            <input
              placeholder="Valid Email"
              type="email"
              id="email"
              name="email"
              value={doctorData.email}
              className="outline-none sm:w-[80%] w-[70%] "
              onChange={handleChange}
            />
          </div>
          <div className="flex flow-row sm:justify-between border-[3px] border-[#6F42C1] rounded-3xl items-center sm:gap-3 gap-2 pl-5 bg-white h-11 sm:w-[510px] sm:pr-3 pr-1 w-[90%] mt-5">
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
          <div className="flex sm:flex-row flex-col mt-4 gap-1 text-[19px]">
            <p className="text-[#013A00]">Don't have an Account?</p>
            <button onClick={() => router.push('/doctor/signup')} className="text-[#6F42C1]">Click here to Signup</button>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-[#6F42C1] w-[50%] rounded-full text-white py-2 mt-8"
          >
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
