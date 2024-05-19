import Image from 'next/image'
import React from 'react'
interface TherapyCardProps {
    img? : any,
    title : string,
    buttonTitle:string,
}
const TherapyCard:React.FC<TherapyCardProps> = ({img,title,buttonTitle}) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <Image src={img} alt={title}/>
        <p className="text-[22px] font-medium mt-3 text-center">{title}</p>
        <button className="bg-[#0C71C3] px-8 py-3 text-white rounded-xl mt-8">{buttonTitle}</button>
    </div>
  )
}

export default TherapyCard