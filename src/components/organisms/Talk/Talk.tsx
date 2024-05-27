import { ChatPic } from '@assests'
import Image from 'next/image'
import React from 'react'

const talk = () => {
    return (
        <div className="py-16 bg-[#9adfdf] bg-gradient-radial from-white">
            <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-x-20 lg:mx-52 mx-4">
                <div className="lg:w-1/2 w-full flex flex-col items-center">
                    <p className="text-[28px] font-medium text-[#0C71C3] mt-8 text-center">Talk To A Psychologist</p>
                    <p className="text-base font-bold text-[#0C71C3] mt-8 text-center">India’s Best Online Therapy and Counselling Consultation</p>
                    <p className="text-base font-bold text-[#0C71C3] mt-8 w-[90%] leading-7 text-center">Website. Stress Free provides the best <span className="text-[#EDB059]">online psychologist </span>
                         consultation and counsellors appointment in India and the globe.</p>
                    <p className="text-base font-bold text-[#0C71C3] mt-8 w-[90%] text-center">We give you the right psychologist for your mental and
                        emotional health.</p>
                    <button className="text-[#0C71C3] mt-8 rounded-[6px] px-6 py-3 border-[2px] border-[#0C71C3] font-bold">Start Therapy Now</button>
                </div>
                <div className="mt-8 lg:mt-0">
                    <Image src={ChatPic} alt='Chat Pic' />
                </div>
            </div>
        </div>
    )
}

export default talk