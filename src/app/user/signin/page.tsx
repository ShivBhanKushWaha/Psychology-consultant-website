'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Lock, Phone, Email } from '@assests'; // Assuming this is a valid import path
import { useRouter } from 'next/navigation'; // Corrected import path

const Page = () => {
    const router = useRouter();
    const [userData, setUserData] = useState({
        mobile: '',
        email: '',
        password: '',
    });

    const handleChange = (e : any) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const signUp = (e : any) => {
        e.preventDefault();
        console.log(userData);
    };

    return (
        <div className="flex flex-col my-5 py-10 items-center">
            <div className="w-full lg:rounded-l-3xl py-5 px-2 md:px-0 flex flex-col items-center">
                <p className="md:text-3xl text-xl text-[#1A1D26] font-bold uppercase text-center">Sign In</p>
                <div className="flex items-center flex-col mt-5">

                    <div className="flex flow-row border-[3px] border-[#6F42C1] rounded-3xl items-center md:gap-3 gap-2 pl-5 bg-white h-11 md:w-[419px] w-full mt-5">
                        <Image src={Phone} alt='Phone' />
                        <input className="remove-arrow outline-none md:w-[85%] w-3/4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder-text-[#1C1C1C]" placeholder='Mobile Number' type='number' id="mobile" name="mobile" value={userData.mobile} onChange={handleChange}/>
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
                        <button onClick={() => router.push('/signup')} className="text-[#6F42C1]">Click here to Signup</button>
                    </div>

                    <button onClick={signUp} className="bg-[#1A1D26] text-white text-[15px] font-bold w-[124px] h-[52px] rounded-2xl mt-3">SIGN UP</button>

                </div>
            </div>
        </div>
    );
}

export default Page;
