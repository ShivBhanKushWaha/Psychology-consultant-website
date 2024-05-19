import React from 'react'
interface SymptomCardProps{
    title:String,
    description:String
}
const SymptomCard:React.FC<SymptomCardProps> = ({title,description}) => {
  return (
    <div className="border-black-1000 rounded-xl bg-white lg:w-[470px] sm:w-80 w-full items-center justify-center flex flex-col sm:py-16 sm:px-16 py-10 px-10 shadow-xl">
        <p className="text-[#6F42C1] text-2xl font-bold">{title}</p>
        <p className="text-center text-lg mt-4 text-[#A4A4A4] text-[15px]">{description}</p>
    </div>
  )
}

export default SymptomCard