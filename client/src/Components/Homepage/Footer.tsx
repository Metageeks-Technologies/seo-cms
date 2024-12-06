import React from "react";
// import styles from '../styles/footer.module.css'
import { FaDribbble } from "react-icons/fa";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full p-2 md:p-5" id="Footer">
      <div className="max-w-[1291px] my-[20px] mx-auto flex flex-col justify-between">
        {/* <div className="w-full">
                    <img src='/footerBg.png' className='w-full h-full object-cover' />
                </div> */}

        <div className="w-full h-[50px] flex flex-row ">
          <div className="w-full h-full rounded-tl-[42px] rounded-tr-3xl bg-black"></div>
          <div className="w-[60%] sm:w-[40%] md:w-[30%] h-full bg-black">
            <div className="flex justify-evenly gap-[10px] items-center text-[18px] lg:text-[24px] w-full h-full bg-[#eeeeee] rounded-bl-3xl pl-2">
              <div className="p-[10px] bg-black text-gray-500 rounded-full cursor-pointer hover:text-white">
                <FaDribbble />
              </div>
              <div className="p-[10px] bg-black text-gray-500 rounded-full cursor-pointer hover:text-white">
                <TbBrandFacebookFilled />
              </div>
              <div className="p-[10px] bg-black text-gray-500 rounded-full cursor-pointer hover:text-white">
                <BsTwitterX />
              </div>
              <div className="p-[10px] bg-black text-gray-500 rounded-full cursor-pointer hover:text-white">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full m-auto text-[#D2D2D2] flex flex-col gap-0 md:gap-5 xl:gap-10 bg-black rounded-tr-[42px] rounded-bl-[42px] p-8 md:px-20 md:py-10">
          <p className="text-[18px] md:text-[30px] font-[500] leading-[30px] tracking-[-2%]">
            Got a project? Need an Under Advantage?
          </p>
          <p className="text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] font-[500] leading-[60px] md:leading-[100px] tracking-[-3%]">
            Crafting Since 2020
          </p>

          <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center justify-between my-4 xl:my-8">
            <div className="w-full md:w-[320px] flex flex-col gap-4">
              <p className="text-[20px] font-[400] leading-[24px] tracking-[-1%]">
                Subscribe newsletter
              </p>
              <p className="text-[16px] font-[400] leading-[24px] tracking-[-1%]">
                Subscribe our newsletter to get the latest news and updates!
              </p>

              <div className="w-full sm:w-[320px] bg-[#1C1C1C] rounded-[100px] flex flex-row items-center justify-center p-[8px] pl-[24px] gap-1">
                <FiMail className='text-3xl' />
                <input
                  type="text"
                  placeholder="enter your email"
                  className="w-full bg-transparent p-[10px] outline-none border-none text-[#D2D2D2]"
                />
                <button className="px-[16px] py-[8px] rounded-[90px] bg-custom-radial from-[#844AFF] to-[#6015FF] text-[#FFFEFD]">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center justify-left flex-wrap gap-10">
              <div className="flex flex-col gap-4 text-[16px] font-[400]">
                <p>Company</p>
                <ul className="list-disc list-inside flex flex-col gap-2">
                  <li>Who we are</li>
                  <li>Our services</li>
                  <li>Our clients</li>
                  <li>Contact us</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4 text-[16px] font-[400]">
                <p>Services</p>
                <ul className="list-disc list-inside flex flex-col gap-2">
                  <li>Planning</li>
                  <li>Research</li>
                  <li>Consulting</li>
                  <li>Analysis</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4 text-[16px] font-[400]">
                <p>Customer</p>
                <ul className="list-disc list-inside flex flex-col gap-2">
                  <li>Client support</li>
                  <li>Help center</li>
                  <li>System status</li>
                  <li>Feedback</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end gap-5 justify-between">
            <div className="text-[16px] flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 items-start lg:items-center">
              <Image src="/image/footerLogo.svg" alt="footerlogo" width={112} height={32} />
              <p>
                Gearing your company through an innovative strategy.
              </p>
            </div>

            <div className="flex flex-row items-center gap-1 md:gap-3 text-[14px]">
              <p>Privacy policy</p>
              <span className="text-[#5A5A59]">|</span>
              <p>Terms and conditions</p>
              <span className="text-[#5A5A59]">|</span>
              <p>Copyright</p>
            </div>
          </div>
        </div>

        <div className="w-full h-[50px] flex flex-row">
          <div className="w-[140%] sm:w-[100%] md:w-[80%] lg:w-[40%] h-full bg-black ">
            <div className="w-full h-full bg-[#eeeeee] rounded-tr-3xl text-[12px] xl:text-[14px] text-[#5A5A59] flex items-end">
              <p className="rounded-3xl bg-white p-[10px] xl:px-[24px] xl:py-[16px] translate-y-2">
                © 2024 Omoway is Proudly Powered by Omotive
              </p>
            </div>
          </div>
          <div className="w-full h-full rounded-bl-3xl rounded-br-[42px] bg-black "></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
