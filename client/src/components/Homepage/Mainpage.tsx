'use client'
import React, { useState } from "react";
import style from "../../styles/Mainpage.module.css";
import Image from "next/image";
import Popup from "@/components/clickable/popup";

import heroimg from "../../../public/image/Illustration.svg"
const Mainpage = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className={style.card} id="Mainpage">
        <div className="container">
          <div className={style.box}>
            <div className={style.flexbox}>
              <div className={style.imgcontent}>
                <Image src="/image/Frame 20432.svg" alt="badge" width={42} height={42} />
                <p>On demand 🤝 live support</p>
              </div>
              <h1 className={style.mainheading}>
                Boost Your Online Visibility with Expert SEO Services
              </h1>
              <Image
                src="/image/Vector.svg"
                alt="underline"
                width={280}
                height={14}
              />
              <div className={style.margintop}>
                <p className={style.para}>
                  Drive targeted traffic, increase conversions
                </p>
                <p className={style.para}>
                  and grow your business with our proven SEO strategies.
                </p>
              </div>
              <div className={style.mainbtn}>
                <button className={style.getbtn} onClick={openPopup}> 
                  Get Started Now
                  <Image src="/image/whitearrow.svg" alt="whitearrow" width={24} height={24} />
                </button>
                <button className={style.learnbtn}>
                  Learn More
                  <Image src="/image/Arrow.svg" alt="blackarrow" width={24} height={24} />
                </button>
              </div>
            </div>
            <div className="display-flex">
              <Image
                src={heroimg}
                alt="why"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={closePopup} />

    </>
  );
};

export default Mainpage;
