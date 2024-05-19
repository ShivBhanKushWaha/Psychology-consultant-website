'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Lock, Phone, Email } from '@assests';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import { SERVER_BASE_URl } from '../../../../Config';

const Page = () => {
    const router = useRouter();
    const [userData, setUserData] = useState({
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
        if(userData.email === ''){
            return toast.error('Enter correct email')
        }
        if(userData.password === ''){
            toast.error('Enter correct password')
        }
        try {
            const res = await axios.post(`${SERVER_BASE_URl}/auth/adminin`, userData);

            if (res) {
                console.log(res.data.admin)
                console.log(res.data.token)
                setUserData({
                    email: '',
                    password: '',
                })
                router.push('/admin')
                toast.success('Admin signin successfully')
                localStorage.setItem('AdminToken', res.data.token);
                router.push('/')
            }
        }
        catch (error: any) {
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
        <div className="flex flex-col my-5 py-10 items-center">
            <div className="flex flex-col items-center rounded-xl border-[3px] border-[#6F42C1] shadow-[#6F42C1] shadow-2xl sm:py-8 sm:px-16 py-4 px-8">
                <p className="md:text-[47px] text-3xl text-[#180259] font-bold uppercase text-center">Admin SignIn</p>
                <div className="flex items-center flex-col mt-5">

                    <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
                        <Image src={Email} alt='Email' />
                        <input placeholder='Email Address' type="email" id="email" name="email" value={userData.email} onChange={handleChange} className="outline-none md:w-[85%] w-3/4 placeholder-text-[#1C1C1C] appearance-none" />
                    </div>

                    <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
                        <Image src={Lock} alt='Lock' />
                        <input placeholder='Enter Your Password' type="password" id="password" name="password" value={userData.password} onChange={handleChange} className="outline-none md:w-[85%] w-3/4 placeholder-text-[#1C1C1C] appearance-none" />
                    </div>

                    <button onClick={() => signIn()} className="bg-[#6F42C1] text-white text-[15px] font-bold w-[124px] h-[52px] rounded-2xl mt-6">SIGN UP</button>

                </div>
            </div>
        </div>
    );
}

export default Page;
