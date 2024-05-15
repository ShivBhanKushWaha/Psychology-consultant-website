'use client'
import { HeroImg } from '@assests';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
const HeroSection = () => {
  const router = useRouter()
  return (
    <div className="flex md:flex-row flex-col justify-center items-center  shadow-[#808081] border-[4px] lg:rounded-br-[280px] rounded-br-[50px] md:py-10 md:px-20 py-4 px-2 bg-[#F8F5FC] h-fit">
      <div className="md:w-1/2 w-full flex flex-col justify-center lg:items-start items-center">
        <p className="text-[#6F42C1] text-center font-bold text-[40px] mt-2">
          Stress Free, Anxiety Free
        </p>
        <p className="text-[#808081] text-[15px] text-center lg:text-start w-3/4 mt-6">
          Psychology is the scientific study of the mind and behavior, including
          human thought, development, personality, emotion, and motivation.
        </p>
        <button onClick={() => router.push('/user/signin')} className="bg-[#6F42C1] rounded-full text-white w-60 px-6 py-2 lg:mt-16 mt-6">
          Consults
        </button>
      </div>
      <div className="md:w-1/2 w-full rounded-br-[380px] mt-10 py-3 px-5 lg:px-0 lg:py-0 lg:mt-0">
        <Image src={HeroImg} alt="Hero Img" />
      </div>
    </div>
  );
};

export default HeroSection;
