'use client'
import React, { useState } from 'react'
import { useAppContext } from '../Context/context';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter()
  const { resUserData, setResUserData, userType, setUserType } = useAppContext();

  if (userType != 'admin') {
    return (
      <div className="flex items-center justify-center min-h-screen flex-col ">
        <p className="text-center text-2xl">You are not admin</p>
        <p className="text-center text-xl">Want to login</p>
        <button onClick={() => router.push('/admin/signin')} className="bg-[#6F42C1] rounded-full text-white w-60 px-6 py-2 mt-6">
        Click Here
        </button>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center">
      <p className="text-center text-2xl">Are You Admin</p>
      <button onClick={() => router.push('/admin/signin')} className="bg-[#6F42C1] rounded-full text-white w-60 px-6 py-2 mt-6">
        Login
        </button>
    </div>
  )
}

export default page