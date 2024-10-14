'use client';
/* eslint-disable jsx-a11y/img-redundant-alt */
'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants'; // Assuming you have social links in your constants
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative bg-[#1E1E2D]`} // Darker background color for better contrast
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      {/* Header Section */}
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-[#FFB700]"> {/* Changed text color to a warm yellow */}
          Explore Geological Eras
        </h4>
        <div className="bg-gradient-to-b from-[rgba(220,220,220,1)] to-[rgba(233,213,190,1)] overflow-hidden p-6">
          <div className="flex justify-center items-center gap-4">
            <div className="p-2 border-2 border-[#1E1E2D] rounded-md"> {/* Padding and border for first image */}
              <img
                src="/trex.png" // Replace with your relevant image for the first item
                alt="Image 1"
                className="w-[100px] h-[100px] object-cover"
              />
            </div>
            <div className="p-2 border-2 border-[#1E1E2D] rounded-md"> {/* Padding and border for second image */}
              <img
                src="/mamooth.jpg" // Replace with your relevant image for the second item
                alt="Image 2"
                className="w-[100px] h-[100px] object-cover"
              />
            </div>
            <div className="p-2 border-2 border-[#1E1E2D] rounded-md"> {/* Padding and border for third image */}
              <img
                src="/trilobite.jpg" // Replace with your relevant image for the third item
                alt="Image 3"
                className="w-[100px] h-[100px] object-cover"
              />
            </div>
          </div>
          <h2 className="mt-4 text-center font-semibold text-[18px] text-[#1E1E2D]">
            INPT Laboratory Research
          </h2>
        </div>

      </div>

      {/* Divider and Copyright Section */}
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex-grow flex justify-center"> {/* Center social media icons */}
            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
          <p className="font-normal text-[14px] text-white opacity-50 text-right"> {/* Right align copyright text */}
            Copyright © 2024 Geological Eras Exploration. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
