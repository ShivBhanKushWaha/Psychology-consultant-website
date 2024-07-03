'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo, Menu, Close, AdminLogo, DoctorLogin, UserLogin, Appointment, Home, CurrentUser } from '@assests';
import { useRouter, usePathname } from 'next/navigation';
import { useAppContext } from '../../app/Context/context';
import { ProfileModal } from '@molecules';
import axios from 'axios';
import { SERVER_BASE_URL } from '../../../Config';
import toast from 'react-hot-toast';

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [nav, setNav] = useState(false);
  const { resUserData, setResUserData, userType, setUserType } = useAppContext();
  const [hoverProfile, setHoverProfile] = useState(false);
  const [showHoverProfile, setShowHoverProfile] = useState(false);

  const handleMouseEnter = () => {
    setShowHoverProfile(true);
  };

  const handleMouseLeave = () => {
    setShowHoverProfile(false);
  };

  useEffect(() => {
    function handleNav() {
      if (window.innerWidth > 767) {
        setNav(false);
      }
    }
    function handleScroll() {
      setNav(false);
    }
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleNav);
    return () => {
      window.removeEventListener('resize', handleNav);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const getLoggedDetails = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get(`${SERVER_BASE_URL}/userDetails`, {
          headers: {
            authorization: token
          }
        });

        const userData = await res.data.details;
        setResUserData(userData);
        const userType = await res.data.type;
        setUserType(userType);
      } catch (error: any) {
        console.log('Error while fetching logged details', error.message);
      }
    };

    getLoggedDetails();
  }, []);

  const handleLinkClick = () => {
    setNav(false); // Chiude il menu
  };

  const handleLogout = async () => {
    try {
        const token = localStorage.getItem('token');
        if (token) {
            localStorage.removeItem('token');
            setResUserData(null);
            setUserType(null)
            router.push('/');
            router.refresh()
            toast.success('Sign out successfully');
        }
    } catch (error:any) {
        console.log('while trying to logout some error');
        toast.error('logout error');
    }
};

  const renderMenuItems = () => {
    switch (userType) {
      case 'admin':
        return (
          <>
            {pathName !== '/' && (
              <li onClick={handleLinkClick} className="text-base hover:cursor-pointer items-center justify-center flex flex-row gap-2 md:mr-8 mr-0 py-1.5">
                <Image src={Home} alt="Home Logo" />
                <Link href="/">Home</Link>
              </li>
            )}
            <li onClick={handleLinkClick} className="text-base hover:cursor-pointer items-center justify-center flex flex-row gap-2 md:mr-8 mr-0 py-1.5">
              <Image src={AdminLogo} alt='Admin Logo' />
              <Link href="/admin/dashboard">Dashboard</Link>
            </li>
            {resUserData?.id && (
              <div className="relative" onClick={() => handleLogout()}>
                {resUserData?.image ? (
                  <Image
                    src={`${resUserData?.image}`}
                    width={40}
                    height={40}
                    alt='User Profile'
                    className="rounded-full relative"
                  />
                ) : (
                  <Image
                    src={CurrentUser}
                    alt='Default Profile'
                    className="cursor-pointer"
                  />
                )}
              </div>
            )}
          </>
        );
      case 'doctor':
        return (
          <>
            {pathName !== '/' && (
              <li onClick={handleLinkClick} className="text-base hover:cursor-pointer items-center justify-center flex flex-row gap-2 md:mr-8 mr-0 py-1.5">
                <Image src={Home} alt="Home Logo" />
                <Link href="/">Home</Link>
              </li>
            )}
            <li onClick={handleLinkClick} className="text-base hover:cursor-pointer items-center justify-center flex flex-row gap-2 md:mr-8 mr-0 py-1.5">
              <Image src={DoctorLogin} alt='Doctor Logo' />
              <Link href="/doctor/dashboard">Dashboard</Link>
            </li>
            <li onClick={handleLinkClick} className="text-base hover:cursor-pointer items-center justify-center flex flex-row gap-2 md:mr-8 mr-0 py-1.5">
              <Image src={Appointment} alt='Appointment Logo' />
              <Link href="/appointment">Appointment</Link>
            </li>
            {resUserData?.id && (
              <div className="relative" onClick={() => handleLogout()}>
                {resUserData?.image ? (
                  <Image
                    src={`${resUserData?.image}`}
                    width={40}
                    height={40}
                    alt='User Profile'
                    className="rounded-full relative"
                  />
                ) : (
                  <Image
                    src={CurrentUser}
                    alt='Default Profile'
                    className="cursor-pointer"
                  />
                )}
              </div>
            )}
          </>
        );
      case 'user':
        return (
          <>
            {pathName !== '/' && (
              <li onClick={handleLinkClick} className="text-base hover:cursor-pointer items-center justify-center flex flex-row gap-2 md:mr-8 mr-0 py-1.5">
                <Image src={Home} alt="Home Logo" />
                <Link href="/">Home</Link>
              </li>
            )}
            <li onClick={handleLinkClick} className="text-base hover:cursor-pointer items-center justify-center flex flex-row gap-2 md:mr-8 mr-0 py-1.5">
              <Image src={Appointment} alt='Appointment Logo' />
              <Link href="/appointment">Appointment</Link>
            </li>
            {resUserData?.id && (
              <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {resUserData?.image ? (
                  <Image
                    src={`${resUserData?.image}`}
                    width={40}
                    height={40}
                    alt='User Profile'
                    className="cursor-pointer rounded-full relative"
                  />
                ) : (
                  <Image
                    src={CurrentUser}
                    alt='Default Profile'
                    className="cursor-pointer"
                  />
                )}
                {(hoverProfile || showHoverProfile) && (
                  <div
                    onMouseEnter={() => setHoverProfile(true)}
                    onMouseLeave={() => setHoverProfile(false)}
                    className="absolute"
                  >
                    <ProfileModal setHoverProfile={setHoverProfile} setShowHoverProfile={setShowHoverProfile} />
                  </div>
                )}
              </div>
            )}
          </>
        );
      default:
        return (
          <>
            {pathName !== '/' && (
              <li onClick={handleLinkClick} className="text-base hover:cursor-pointer items-center justify-center flex flex-row gap-2 md:mr-8 mr-0 py-1.5">
                <Image src={Home} alt="Home Logo" />
                <Link href="/">Home</Link>
              </li>
            )}
            <li onClick={handleLinkClick} className="text-base hover:cursor-pointer items-center justify-center flex flex-row gap-2 md:mr-8 mr-0 py-1.5">
              <Image src={Appointment} alt='Appointment Logo' />
              <Link href="/appointment">Appointment</Link>
            </li>
            <li onClick={handleLinkClick} className="text-base hover:cursor-pointer items-center justify-center flex flex-row gap-2 md:mr-8 mr-0 py-1.5">
              <Image src={AdminLogo} alt='Admin Logo' />
              <Link href="/admin/signin">Admin</Link>
            </li>
            <li onClick={handleLinkClick} className="text-base hover:cursor-pointer items-center justify-center flex flex-row gap-2 md:mr-8 mr-0 py-1.5">
              <Image src={DoctorLogin} alt='Doctor Logo' />
              <Link href="/doctor/signin">Doctor</Link>
            </li>
            <li onClick={handleLinkClick} className="text-base hover:cursor-pointer items-center justify-center flex flex-row gap-2 md:mr-8 mr-0 py-1.5">
              <Image src={UserLogin} alt='Doctor Logo' />
              <Link href="/user/signin">User</Link>
            </li>
          </>
        );
    }
  };

  return (
    <nav className="w-full">
      <div className="flex items-center justify-between md:px-8 md:py-2 px-4 py-1  bg-[#6F42C1]">
        <Image
          className="rounded-xl md:w-fit md:pl-0 w-32 h-10 object-contain"
          src={Logo}
          alt={'Logo'}
          onClick={() => router.push('/')}
        />
        <button
          onClick={() => setNav(!nav)}
          type="button"
          className="inline-flex items-center w-10 h-10 justify-center rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          {nav ? (
            <Image className="size-10" src={Close} alt="Close" />
          ) : (
            <Image className="size-10" src={Menu} alt="Menu" />
          )}
        </button>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex font-normal text-white flex-row p-3 md:p-2 mt-4 rounded-lg md:mt-0 md:border-0 items-center justify-center">
            {renderMenuItems()}
          </ul>
        </div>

        {nav && (
          <ul className="flex z-50 flex-col justify-center items-center absolute top-10 left-0 w-full bg-[#6F42C1] shadow-md rounded-b-xl text-white">
            {renderMenuItems()}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
