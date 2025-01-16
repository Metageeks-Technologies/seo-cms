"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Services.module.css";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleContent = (index: number): void => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const services = [
    {
      title: "Keyword Research",
      index: 0,
    },
    {
      title: "On-Page SEO",
      index: 1,
    },
    {
      title: "Technical SEO",
      index: 2,
    },
    {
      title: "Content Creation",
      index: 3,
    },
  ];

  return (
    <div className="container py-10" id="Service">
      <div className={styles.header}>
        <div className={styles.icon}>
          <div>
            <div className={styles.badge}>
              <Image
                src="/image/Businessicon.svg"
                alt=""
                width={42}
                height={42}
              />
              <p className={styles.subHeading}>Business 💸 Approach</p>
            </div>
            <h1 className={styles.mainHeading}>
              Comprehensive SEO Solutions To Elevate Your Business
            </h1>
            <p className={styles.description}>
              We are a digital marketing agency with expertise, and we&apos;re
              on a mission to help you take the next step in your business.
            </p>
          </div>
          <button className={styles.servicesButton}>
            View all services
            <Image
              src="/image/whitearrow.svg"
              alt=""
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 
            hidden sm:inline-block"
            />
          </button>
        </div>

        <div className={styles.services}>
          {services.map((service) => (
            <div
              key={service.index}
              className={`${styles.serviceItem} ${
                openIndex === service.index ? styles.activeBorder : ""
              }`}
            >
              <div
                className={styles.serviceHeader}
                onClick={() => toggleContent(service.index)}
              >
                <h2
                  className={`${styles.serviceTitle} ${
                    openIndex === service.index ? styles.activeText : ""
                  }`}
                >
                  {service.title}
                </h2>
                <span className={styles.arrow}>
                  <Image
                    src="/image/rightarrow.svg"
                    alt="arrow"
                    width={32}
                    height={32}
                  />
                </span>
              </div>
              <div className={styles.serviceContent}>
                <Image
                  src="/image/Group 39877.svg"
                  alt="img"
                  width={262}
                  height={182}
                />
                <p>
                  We strive to develop real-world web solutions that are ideal
                  for small to large projects with bespoke project requirements.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
