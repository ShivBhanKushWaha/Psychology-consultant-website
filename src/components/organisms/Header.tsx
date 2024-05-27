'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo, Menu, Close, AdminLogo, DoctorLogin, UserLogin, Appointment, Home, CurrentUser } from '@assests';
import { useRouter, usePathname } from 'next/navigation';
import { useAppContext } from '../../app/Context/context';
import { ProfileModal } from '@molecules';
const Header = () => {
  const router = useRouter();
  const pathName = usePathname()
  const [nav, setNav] = useState(false);
  const { resUserData, setResUserData, userType, setUserType } = useAppContext()
  const [hoverProfile, setHoverProfile] = useState(false)
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

  return (
    <nav className="w-full">
      <div className="flex items-center justify-between md:px-8 md:py-5 px-4 py-1  bg-[#6F42C1]">
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
            {pathName !== '/' && (
              <li onClick={() => router.push("/")} className="text-base hover:cursor-pointer items-center justify-center flex flex-row gap-2 md:mr-8 mr-0">
                <Image src={Home} alt="Home Logo" />
                Home
              </li>
            )}
            <li className="text-base hover:cursor-pointer items-center justify-center flex flex-row gap-2 md:mr-8 mr-0" onClick={() => router.push("/admin/signin")}>
              <Image src={AdminLogo} alt='Admin Logo' />
              Admin
            </li>


            <li className="text-base hover:cursor-pointer relative items-center justify-center flex flex-row gap-2 md:mr-8 mr-0" onClick={() => router.push("/doctor/signin")}>
              <Image src={DoctorLogin} alt='Doctor Logo' />
              Doctor
            </li>
            <li className="text-base hover:cursor-pointer relative items-center justify-center flex flex-row gap-2 md:mr-8 mr-0" onClick={() => router.push("/appointment")}>
              <Image src={Appointment} alt='Doctor Logo' />
              Appointment
            </li>

            {
              <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {resUserData?.id && (
                  resUserData?.image ? (
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
                  )
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
            }
            {
              (!resUserData?.id) &&
              <li onClick={() => router.push('/user/signin')} className="text-base hover:cursor-pointer relative items-center justify-center flex flex-row gap-2"><Image src={UserLogin} alt='Doctor Logo' />
                User</li>
            }
          </ul>
        </div>

        {nav && (
          <ul className="flex z-50 flex-col justify-center items-center absolute top-12 left-0 w-full bg-[#6F42C1] shadow-md rounded-b-xl  text-white">
            {
              <div>
                {pathName !== '/' && (<li className="px-4 cursor-pointer capitalize py-2">
                  <Link
                    onClick={() => setNav(!nav)}
                    className="text-base items-center justify-center flex flex-row gap-2"
                    href="/"
                  >
                    <Image src={Home} alt='Admin Logo' />
                    Home
                  </Link>
                </li>)}
                <li className="px-4 cursor-pointer capitalize py-2">
                  <Link
                    onClick={() => setNav(!nav)}
                    className="text-base items-center justify-center flex flex-row gap-2"
                    href="/admin/signin"
                  >
                    <Image src={AdminLogo} alt='Admin Logo' />
                    Admin
                  </Link>
                </li>
                {
                  userType !== 'doctor' || userType === "" ? <li className="px-4 cursor-pointer capitalize py-2">
                    <Link
                      onClick={() => setNav(!nav)}
                      className="text-base items-center justify-center flex flex-row gap-2"
                      href="/doctor/signup"
                    >
                      <Image src={DoctorLogin} alt='Doctor Logo' />
                      Doctor
                    </Link>
                  </li> : <li className="px-4 cursor-pointer capitalize py-2">
                    <Link
                      onClick={() => setNav(!nav)}
                      className="text-base items-center justify-center flex flex-row gap-2"
                      href="/doctor/dashboard"
                    >
                      <Image src={DoctorLogin} alt='Doctor Logo' />
                      Dashboard
                    </Link>
                  </li>
                }
                <li className="px-4 cursor-pointer capitalize py-2">
                  <Link
                    onClick={() => setNav(!nav)}
                    className="text-base items-center justify-center flex flex-row gap-2"
                    href="/Appointment"
                  >
                    <Image src={Appointment} alt='Doctor Logo' />
                    Appointment
                  </Link>
                </li>

                <li className="px-4 cursor-pointer capitalize py-2">
                  <Link
                    onClick={() => setNav(!nav)}
                    className="text-base items-center justify-center flex flex-row gap-2"
                    href="/user/signin"
                  >
                    <Image src={UserLogin} alt='Doctor Logo' />
                    User
                  </Link>
                </li>
              </div>
            }
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
