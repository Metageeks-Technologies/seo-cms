'use client'
import React, { useMemo } from "react";
import { motion } from 'framer-motion';
import styles from "../../styles/Aboutus.module.css";
import getScrollAnimation from "../utils/getScrollAnimation";

import Image from "next/image";

const AboutUs = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 2 }}
    transition={{ duration: 1 }}
    initial={{ y: 50, opacity: 0 }} 
    whileInView={{ y: 0, opacity: 1 }} 
    transition={{ duration: 1 }}
    viewport={{ once: false }}
  >

    <div className={styles.card} id="aboutus">
      <div className="container">
        <Image
          className={styles.backgroundPattern}
          src="/image/pattern.svg"
          alt="pattern"
          width={1014}
          height={835}
        />
        <div className={styles.wrapper}>
          <div className={styles.inline}>
          <div className={styles.patternimg}>
            <Image
              src="/image/illustration2.svg"
              alt="pattern"
              width={668}
              height={595}
            />
          </div>
          <div className={styles.rightcol}>

            <h1>Powerful agency for corporate business.</h1>
            <p>
              We strive to develop real-world web solutions that are ideal for
              small to large projects with bespoke project requirements.
            </p>
            
            <div className={styles.readbtn}>
              Read about us
              <Image
                src="/image/whitearrow.svg"
                alt="whitearrow"
                width={24}
                height={24}
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    {/* </motion.h1> */}
    </motion.div>

  );
};

export default AboutUs;
