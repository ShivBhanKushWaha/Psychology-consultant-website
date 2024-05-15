'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Lock, Phone, Email, User } from '@assests';
import { useRouter } from 'next/navigation';
const page = () => {
    const router = useRouter()
    const [userData, setUserData] = useState({
        mobile: '',
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

    const SignUp = (e: any) => {
        e.preventDefault();
        console.log(userData);
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
                        <input name='mobile' placeholder='Mobile Number' type='number' id="mobile" inputMode="numeric" value={userData.mobile} onChange={handleChange} className="remove-arrow outline-none md:w-[85%] w-3/4 placeholder-text-[#1C1C1C] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
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

                    <button onClick={SignUp} className="bg-[#6F42C1] text-white text-[15px] font-bold w-[124px] h-[52px] rounded-2xl mt-3">SIGN UP</button>

                </div>
            </div>
        </div>
    );
}

export default page;
