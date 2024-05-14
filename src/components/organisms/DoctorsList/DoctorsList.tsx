import { Doctors } from '@assests'
import Image from 'next/image'
import React from 'react'

const DoctorsList = () => {
    return (
        <div className="py-[72px]">
            <div className="flex lg:flex-row flex-col items-center justify-center md:gap-x-10 lg:px-16 xl:px-52 px-5 gap-x-0">
                <div className="lg:w-1/2 w-full items-center justify-center flex">
                    <Image src={Doctors} alt='Doctor Image' />
                </div>
                <div className="lg:w-1/2 w-full mt-5 lg:mt-0">
                    <p className="text-[30px] font-bold text-[#000E93]">Top Psychologists in India</p>
                    <p className="font-bold text-2xl text-[#180259] mt-5">Consult Best Psychologists in India</p>
                    <p className="text-base font-normal mt-8">Top Therapists, Counsellors, Mental Health Experts in India. See the
                        List of Top Psychologists in India. Best <span className="text-[#EDB059]">Online Psychologist
                            Consultation</span> in India.</p>
                    <p className="font-bold text-2xl text-[#180259] mt-5">Certified & Experienced</p>
                    <p className="mt-8">Get the best online Therapy & Counseling Experience from the
                        Verified Professionals. Top Therapists for your mental health.</p>
                    <p className="font-bold text-2xl text-[#180259] mt-5">Best Psychiatrists from AIIMS & NIMHANS in
                        India</p>
                    <p className="mt-8 w-[95%]">Connect with top psychiatrist from <span className="text-[#0A0A0A] font-bold">AIIMS</span> & <span className="text-[#0A0A0A] font-bold">NIMHANS</span>online at
                        your comfortable space at your convenient time. Get the best
                        Psychiatric treatment possible online with Stress free Service.</p>
                    <p className="text-[#0A0A0A] text-base font-bold mt-10">We assign the best psychologist and counsellor as per your
                        case. We Choose the best for you.</p>
                    <button className="bg-[#6F42C1] rounded-full text-white px-6 py-2 lg:mt-16 mt-6">See the Psychologists</button>
                </div>
            </div>
        </div>
    )
}

export default DoctorsList