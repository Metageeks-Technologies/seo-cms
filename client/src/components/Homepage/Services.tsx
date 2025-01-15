"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Services.module.css";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleContent = (index: number): void => {
    setOpenIndex(index === openIndex ? null : index);
  };

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
              <div></div>
            </div>
            <h1 className={styles.mainHeading}>
              Comprehensive SEO Solutions To Elevate Your Business
            </h1>
            <p className={styles.description}>
              We are a digital marketing agency with expertise, and we’re on a
              mission to help you take the next step in your business.
            </p>
          </div>
          <button className={styles.servicesButton}>
            View all services
            <Image src="/image/whitearrow.svg" alt="" width={24} height={24} />
          </button>
        </div>
        <div className={styles.services}>
          <div
            className={`${styles.serviceItem} ${
              openIndex === 0 ? styles.activeBorder : ""
            }`}
          >
            <div
              className={styles.serviceHeader}
              onClick={() => toggleContent(0)}
            >
              <h2
                className={`${styles.serviceTitle} ${
                  openIndex === 0 ? styles.activeText : ""
                }`}
              >
                Keyword Research
              </h2>
              <span className={styles.arrow}>
                {openIndex === 0 ? (
                  <Image
                    src="/image/uparrow.svg"
                    alt="uparrow"
                    width={32}
                    height={32}
                  />
                ) : (
                  <Image
                    src="/image/rightarrow.svg"
                    alt="rightarrow"
                    width={32}
                    height={32}
                  />
                )}
              </span>
            </div>
            {openIndex === 0 && (
              <div className={styles.badge}>
                <div className={styles.serviceContent}>
                  <Image
                    src="/image/Group 39877.svg"
                    alt="img"
                    width={262}
                    height={182}
                  />
                  <p>
                    We strive to develop real-world web solutions that are ideal
                    for small to large projects with bespoke project
                    requirements.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div
            className={`${styles.serviceItem} ${
              openIndex === 1 ? styles.activeBorder : ""
            }`}
          >
            <div
              className={styles.serviceHeader}
              onClick={() => toggleContent(1)}
            >
              <h2
                className={`${styles.serviceTitle} ${
                  openIndex === 1 ? styles.activeText : ""
                }`}
              >
                On-Page SEO
              </h2>
              <span className={styles.arrow}>
                {openIndex === 1 ? (
                  <Image
                    src="/image/uparrow.svg"
                    alt="uparrow"
                    width={32}
                    height={32}
                  />
                ) : (
                  <Image
                    src="/image/rightarrow.svg"
                    alt="rightarrow"
                    width={32}
                    height={32}
                  />
                )}
              </span>
            </div>
            {openIndex === 1 && (
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
            )}
          </div>

          <div
            className={`${styles.serviceItem} ${
              openIndex === 2 ? styles.activeBorder : ""
            }`}
          >
            <div
              className={styles.serviceHeader}
              onClick={() => toggleContent(2)}
            >
              <h2
                className={`${styles.serviceTitle} ${
                  openIndex === 2 ? styles.activeText : ""
                }`}
              >
                Technical SEO
              </h2>
              <span className={styles.arrow}>
                {openIndex === 2 ? (
                  <Image
                    src="/image/uparrow.svg"
                    alt="img"
                    width={32}
                    height={32}
                  />
                ) : (
                  <Image
                    src="/image/rightarrow.svg"
                    alt="img"
                    width={32}
                    height={32}
                  />
                )}
              </span>
            </div>
            {openIndex === 2 && (
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
            )}
          </div>

          <div
            className={`${styles.serviceItem} ${
              openIndex === 3 ? styles.activeBorder : ""
            }`}
          >
            <div
              className={styles.serviceHeader}
              onClick={() => toggleContent(3)}
            >
              <h2
                className={`${styles.serviceTitle} ${
                  openIndex === 3 ? styles.activeText : ""
                }`}
              >
                Content Creation
              </h2>
              <span className={styles.arrow}>
                {openIndex === 3 ? (
                  <Image
                    src="/image/uparrow.svg"
                    alt="img"
                    width={32}
                    height={32}
                  />
                ) : (
                  <Image
                    src="/image/rightarrow.svg"
                    alt="img"
                    width={32}
                    height={32}
                  />
                )}
              </span>
            </div>
            {openIndex === 3 && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
