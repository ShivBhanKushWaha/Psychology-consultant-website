import { HeroImg } from '@assests'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className="flex md:flex-row flex-col justify-center items-center  shadow-[#808081] border-[4px] lg:rounded-br-[280px] rounded-br-[50px] md:py-10 md:px-20 py-4 px-2 bg-[#F8F5FC] h-fit">
            <div className="md:w-1/2 w-full flex flex-col justify-center lg:items-start items-center">
                <p className="text-[#6F42C1] text-center font-bold text-2xl uppercase">Psychological Treatment</p>
                <p className="text-[#6F42C1] text-center font-bold text-[40px] mt-2">Stress Free, Anxity Free </p>
                <p className="text-[#808081] text-[15px] text-center lg:text-start w-3/4 mt-6">Amet minim mollit non deserunt ullamco est sit do amet sint officia.
                    Velit officia consequat duis enim velit mollit. </p>
                <button className="bg-[#6F42C1] rounded-full text-white px-6 py-2 lg:mt-16 mt-6">Sign Up</button>
            </div>
            <div className="md:w-1/2 w-full rounded-br-[380px] mt-10 py-3 px-5 lg:px-0 lg:py-0 lg:mt-0">
                <Image src={HeroImg} alt='Hero Img'/>
            </div>
        </div>
    )
}

export default HeroSection