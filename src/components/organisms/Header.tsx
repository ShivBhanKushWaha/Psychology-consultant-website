'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo, Menu, Close} from '@assests';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();
  
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
      <div className="flex items-center justify-between md:px-16 md:py-5 px-4 py-1  bg-[#6F42C1]">
        <Image
          className="md:w-52 md:pl-3 w-32 h-10 object-contain"
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
          <ul className="flex font-normal text-white flex-col p-4 md:p-2 mt-4 rounded-lg  md:flex-row md:space-x-14 md:mt-0 md:border-0">
            <li>
              <Link className="text-base focus:text-blue-500" href="/admin">
                Admin
              </Link>
            </li>
            <li>
              <Link className="text-base relative focus:text-blue-500" href="/doctor/signup">
                Doctor
              </Link>
            </li>
            <li>
              <Link className="text-base relative focus:text-blue-500" href="/Appoitnent">
                Appoitnent
              </Link>
            </li>
            <li>
              <Link className="text-base focus:text-blue-500" href="/user/signin">
                User
              </Link>
            </li>
          </ul>
        </div>

        {nav && (
          <ul className="flex z-50 flex-col justify-center items-center absolute top-12 left-0 w-full bg-[#6F42C1] shadow-md rounded-b-xl  text-white">
            {
              <div>
                <li className="px-4 cursor-pointer capitalize py-2">
                  <Link
                    onClick={() => setNav(!nav)}
                    className="text-base"
                    href="/"
                  >
                    Admin
                  </Link>
                </li>
                <li className="px-4 cursor-pointer capitalize py-2">
                  <Link
                    onClick={() => setNav(!nav)}
                    className="text-base"
                    href="/Reports"
                  >
                    Doctor
                  </Link>
                </li>
                <li className="px-4 cursor-pointer capitalize py-2">
                  <Link
                    onClick={() => setNav(!nav)}
                    className="text-base"
                    href="/Symptons"
                  >
                    Appoitment
                  </Link>
                </li>
                <li className="px-4 cursor-pointer capitalize py-2">
                  <Link
                    onClick={() => setNav(!nav)}
                    className="text-base"
                    href="/about"
                  >
                    user
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
