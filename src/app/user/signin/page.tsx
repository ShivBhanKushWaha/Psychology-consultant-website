'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Lock, Phone, Email } from '@assests'; // Assuming this is a valid import path
import { useRouter } from 'next/navigation'; // Corrected import path
import axios from 'axios';
import toast from 'react-hot-toast';
import { SERVER_BASE_URL } from '../../../../Config';
import { useAppContext } from '../../Context/context';
const Page = () => {
    const router = useRouter();
    const { resUserData, setResUserData, userType, setUserType } = useAppContext()
    const [userData, setUserData] = useState({
        mobile: '',
        email: '',
        password: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const signIn = async () => {
        if (userData.email === '' || userData.mobile === '' || userData.password === '') {
            return toast.error('Fill the form properly')
        }

        if (userData.mobile.length != 10) {
            return toast.error('Invalid mobile number')
        }

        if (userData.password.length < 5) {
            return toast.error('Password must be length of 5')
        }

        try {
            const res = await axios.post(`${SERVER_BASE_URL}/auth/userLogin`, userData);

            if (res) {
                console.log(res.data.user)
                console.log(res.data.token)
                setResUserData(res.data.user)
                setUserType('user')
                router.push('/Appointment')
                setUserData({
                    mobile: '',
                    email: '',
                    password: '',
                })
                toast.success('User signin Success')
                localStorage.setItem('token', res.data.token);
                router.push('/')
            }
        }
        catch (error: any) {
            if (error.response && error.response.status === 400) {
                toast.error('User not found')
            }
            else {
                toast.error('Something went wrong')
                console.log('error while signin  user', error.response)
            }
            console.log('error while signin  user', error)
        }
    };

    return (
        <div className="flex flex-col my-5 py-10 items-center">
            <div className="flex flex-col items-center rounded-xl border-[3px] border-[#6F42C1] shadow-[#6F42C1] shadow-2xl sm:py-8 sm:px-16 py-4 px-8">
                <p className="md:text-[47px] text-3xl text-[#180259] font-bold uppercase text-center">Sign In</p>
                <div className="flex items-center flex-col mt-5">
                    <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
                        <Image src={Phone} alt='Phone' />
                        <input className="remove-arrow outline-none md:w-[85%] w-3/4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder-text-[#1C1C1C]" placeholder='Mobile Number' type='number' id="mobile" name="mobile" value={userData.mobile} onChange={handleChange} />
                    </div>

                    <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
                        <Image src={Email} alt='Email' />
                        <input placeholder='Email Address' type="email" id="email" name="email" value={userData.email} onChange={handleChange} className="outline-none md:w-[85%] w-3/4 placeholder-text-[#1C1C1C] appearance-none" />
                    </div>

                    <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
                        <Image src={Lock} alt='Lock' />
                        <input placeholder='Enter Your Password' type="password" id="password" name="password" value={userData.password} onChange={handleChange} className="outline-none md:w-[85%] w-3/4 placeholder-text-[#1C1C1C] appearance-none" />
                    </div>

                    <div className="flex sm:flex-row flex-col mt-4 gap-1 text-[19px]">
                        <p className="text-[#013A00]">Don't have an Account?</p>
                        <button onClick={() => router.push('/user/signup')} className="text-[#6F42C1]">Click here to Signup</button>
                    </div>

                    <button onClick={() => signIn()} className="bg-[#6F42C1] text-white text-[15px] font-bold w-[124px] h-[52px] rounded-2xl mt-3">SIGN IN</button>

                </div>
            </div>
        </div>
    );
}

export default Page;
