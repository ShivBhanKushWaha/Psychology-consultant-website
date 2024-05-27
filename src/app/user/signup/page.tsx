'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Lock, Phone, Email, User } from '@assests';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';
import { SERVER_BASE_URl } from '../../../../Config';
import { useAppContext } from '../../Context/context';
const page = () => {
    const router = useRouter()
    const { resUserData, setResUserData, userType, setUserType } = useAppContext()
    const [userData, setUserData] = useState({
        mobileNumber: '',
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const SignUp = async () => {
        const { confirmPassword, ...data } = userData;
        if (userData.email === '' || userData.mobileNumber === '' || userData.password === '' || userData.password === '') {
            return toast.error('Fill the form properly')
        }

        if (userData.mobileNumber.length != 10) {
            return toast.error('Invalid mobileNumber number')
        }

        if (userData.password.length < 5) {
            return toast.error('Password must be length of 5')
        }

        if (userData.password != userData.confirmPassword) {
            return toast.error('Password not matched')
        }

        try {
            const res = await axios.post(`${SERVER_BASE_URl}/auth/userSignup`, data);
            console.log(res.data.user)
            console.log(res.data.token)
            if (res) {
                toast.success('New user created successfully')
                resUserData(res.data.user)
                setUserType('user')
                router.push('/Appointment')
                setUserData({
                    mobileNumber: '',
                    email: '',
                    name: '',
                    password: '',
                    confirmPassword: '',
                })
                localStorage.setItem('token', res.data.token);
                router.push('/')
            }
        }
        catch (error: any) {
            if (error.response && error.response.status === 400) {
                toast.error('User Already exists')
            }
            else {
                toast.error('Something went wrong')
                console.log('error while signup new user', error.response)
            }
            console.log('error while signup new user', error)
        }
    };

    return (
        <div className="flex flex-col my-5 py-10 items-center">
            <div className="flex flex-col items-center rounded-xl border-[3px] border-[#6F42C1] shadow-[#6F42C1] shadow-2xl sm:py-8 sm:px-16 py-4 px-8 ">
                <p className="md:text-[47px] text-3xl text-[#180259] font-bold uppercase text-center">Sign Up</p>
                <div className="flex items-center flex-col mt-5">
                    <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
                        <Image src={User} alt='User' />
                        <input name='name' placeholder='Name' type="text" id="name" value={userData.name} onChange={handleChange} className="outline-none md:w-[85%] w-3/4 placeholder-text-[#1C1C1C]" />
                    </div>

                    <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
                        <Image src={Phone} alt='Phone' />
                        <input name='mobileNumber' placeholder='mobileNumber Number' type='number' id="mobileNumber" inputMode="numeric" value={userData.mobileNumber} onChange={handleChange} className="remove-arrow outline-none md:w-[85%] w-3/4 placeholder-text-[#1C1C1C] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                    </div>

                    <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
                        <Image src={Email} alt='Email' />
                        <input name='email' placeholder='Email Address' type="email" id="email" value={userData.email} onChange={handleChange} className="outline-none md:w-[85%] w-3/4 placeholder-text-[#1C1C1C]" />
                    </div>

                    <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
                        <Image src={Lock} alt='Lock' />
                        <input name='password' placeholder='Create Password' type="password" id="password" value={userData.password} onChange={handleChange} className="outline-none md:w-[85%] w-3/4 placeholder-text-[#1C1C1C]" />
                    </div>

                    <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
                        <Image src={Lock} alt='Lock' />
                        <input name='confirmPassword' placeholder='Confirm Password' type="password" id="confirmPassword" value={userData.confirmPassword} onChange={handleChange} className="outline-none md:w-[85%] w-3/4 placeholder-text-[#1C1C1C]" />
                    </div>

                    <div className="flex sm:flex-row flex-col mt-4 gap-1 text-[19px]">
                        <p className="text-[#013A00]">Account already exists?</p>
                        <button onClick={() => router.push('/user/signin')} className="text-[#6F42C1]">Click here to login</button>
                    </div>

                    <button onClick={() => SignUp()} className="bg-[#6F42C1] text-white text-[15px] font-bold w-[124px] h-[52px] rounded-2xl mt-3">SIGN UP</button>

                </div>
            </div>
        </div>
    );
}

export default page;
