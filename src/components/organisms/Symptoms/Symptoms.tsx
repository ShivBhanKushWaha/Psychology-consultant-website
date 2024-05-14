import React from 'react'
import { SymptomCard } from '@molecules'

const Symptoms = () => {
    return (
        <div className="bg-[#F8F5FC] py-16 sm:px-16 px-2">
            <div className="flex flex-col">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-3xl text-[#6F42C1] font-bold text-center">Symtoms of stress & anxiety</p>
                    <p className="text-[15px] text-[#808081] text-center mt-3 sm:w-[515px] w-full px-4 sm:px-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt </p>
                </div>
                <div className="flex flex-col gap-y-10 items-center justify-center mt-8">
                    <div className="flex sm:flex-row flex-col xl:gap-x-36 gap-x-12 sm:gap-x-4 gap-y-10">
                        <SymptomCard title='Rapid heartbeat' description='When you experience stress or anxiety, your body releases stress hormones, which can increase your heart rate and blood pressure.' />
                        <SymptomCard title='Rapid breathing' description="When we feel stressed or anxious, our body's nervous system becomes activated, leading to a cascade of physiological changes" />
                    </div>
                    <div className="flex sm:flex-row flex-col xl:gap-x-36 gap-x-12 sm:gap-x-4 gap-y-10">
                        <SymptomCard title='Tension' description='Increased stress levels can trigger tension headaches, which often feel like a dull, steady ache around the head or neck area.' />
                        <SymptomCard title='Feelings of fear, worry' description='Alongside emotional distress, stress and anxiety often produce physical symptoms such as rapid heartbeat, sweating, trembling, muscle tension.' />
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col justify-between items-center xl:mx-52 lg:mx-12 sm:mx-4 sm:mt-12">
                    <p className="text-[#6F42C1] sm:w-[60%] w-full px-4 sm:px-0 mt-5 sm:mt-0 text-center sm:text-start">Stay at home and call your doctor: <span className="text-[#808081]"> Amet minim mollit non deserunt ullamest sit aliqua dolor do amet sint.</span></p>
                    <button className="bg-[#6F42C1] rounded-full text-white px-6 py-2 mt-8 sm:mt-0">HELPLINE</button>
                </div>
            </div>
        </div>
    )
}

export default Symptoms