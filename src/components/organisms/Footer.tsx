import { Facebook, Instagram, Youtube } from '@assests';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col mt-5 rounded-t-[10px] bg-[#6F42C1] py-4">
      <div className="flex flex-row justify-between mx-20 text-white">
        <div className="flex flex-col gap-y-1">
          <h4 className="text-lg">Contact Us</h4>
          <p>123 Main Street, Cityville, State, Zip</p>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="flex flex-col gap-y-1">
          <h4 className="text-lg">Follow Us</h4>
          <p>Connect with us on social media:</p>
          <div className="flex flex-row gap-x-5 mt-2">
            <a href="">
              <Image src={Instagram} alt='Instagram' />
            </a>
            <a href="">
              <Image src={Facebook} alt='Facebook' />
            </a>
            <a href="">
              <Image src={Youtube} alt='Youtube' />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-white mt-3">
        <div className="text-base">
          <p>&copy; 2024 Your Psychologist Name. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
