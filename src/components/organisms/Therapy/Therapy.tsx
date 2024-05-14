import React from 'react'
import { TherapyCard } from '@molecules'
import { Anxiety, Dipression, RIssues, Stress } from '@assests'

const Therapy = () => {
    return (
        <div className="py-16 lg:px-16 px-6">
            <div className="flex flex-col">
                <div className="flex flex-col justify-center items-center">
                    <p className="lg:text-[41px] text-3xl font-bold text-[#0C71C3] w-full sm:w-[545px] text-center">Best Online Counselling and Therapy Consultation</p>
                    <p className="text-base font-medium mt-4 text-center">Stress Free provides the best online therapy and Counseling</p>
                    <p className="text-base font-medium mt-4 text-center">consultation in India and around the globe. Consult <span className="text-[#EDB059]">Online</span></p>
                    <p className="text-base font-medium leading-7 mt-4 text-center"><span className="text-[#EDB059]">Psychologist</span>, therapist, counsellors, mental health experts via chat,</p>
                    <p className="text-base font-medium mt-5 lg:w-[500px] text-center">phone or video call. Best <span className="text-[#EDB059]">Online Psychologist</span> consultation and Online Psychiatric Consultation.</p>
                </div>
                <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-x-28 gap-x-0 mt-12">
                    <div className="flex sm:flex-row flex-col lg:gap-x-28 sm:gap-x-28 gap-x-6 gap-y-6 lg:gap-y-0">
                        <TherapyCard img={Dipression} title='Depression' buttonTitle='Know More' />
                        <TherapyCard img={Anxiety} title='Anxiety' buttonTitle='Know More' />
                    </div>
                    <div className="flex sm:flex-row flex-col lg:gap-x-28 sm:gap-x-28 gap-x-6 mt-8 lg:mt-0 gap-y-6 lg:gap-y-0">
                        <TherapyCard img={RIssues} title='Relationship Issues' buttonTitle='Know More' />
                        <TherapyCard img={Stress} title='Stress Management' buttonTitle='Know More' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Therapy