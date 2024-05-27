'use client'
// import { HelpIcon, LogoutIcon, ProfileIcon } from '@assests'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useAppContext } from '../../../app/Context/context'
import toast from 'react-hot-toast'
const ProfileModal = ({ setHoverProfile, setShowHoverProfile }: any) => {
    const router = useRouter()
    const { setResUserData } = useAppContext();

    const handleProfile = () => {
        setHoverProfile(false);
        setShowHoverProfile(false)
        router.push('/user/profile')
    }

    const handleHelp = () => {
        setHoverProfile(false);
        setShowHoverProfile(false)
        router.push('/help')
    }

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                setHoverProfile(false);
                setShowHoverProfile(false)
                localStorage.removeItem('token');
                setResUserData(null);
                router.push('/');
                toast.success('Sign out successfully');
            }
        } catch (error) {
            console.log('while trying to logout some error');
            toast.error('logout error');
        }
    };

    return (
        <div className="flex flex-col py-6 bg-white rounded-[10px] shadow-2xl pl-6 pr-24 -ml-32 mt-8 gap-y-3">
            <div className="flex flex-row gap-x-8 cursor-pointer" onClick={() => handleProfile()}>
                {/* <Image src={ProfileIcon} alt='Profile Icon' /> */}
                <p>Profile</p>
            </div>
            <div className="flex flex-row gap-x-8 cursor-pointer" onClick={() => handleHelp()}>
                {/* <Image src={HelpIcon} alt='Profile Icon' /> */}
                <p>Prescription</p>
            </div>
            <div className="flex flex-row gap-x-8 cursor-pointer" onClick={() => handleLogout()}>
                {/* <Image src={LogoutIcon} alt='Profile Icon' /> */}
                <p>Logout</p>
            </div>
        </div>
    )
}

export default ProfileModal