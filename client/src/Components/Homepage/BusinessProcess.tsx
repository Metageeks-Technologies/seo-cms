"use client";
import styles from "../../styles/business.module.css";
import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/image/Subtract.svg", caption: "We strive to develop real-world web solutions that are ideal for small to large projects with bespoke" },
  { src: "/image/carousel2.png" },
];

export default function BusinessProcess() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.backgroundcard} id="Service">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.processInfo}>
            <div className={styles.inline}>
              <Image
                src="/image/processicon.svg"
                width={42}
                height={42}
                alt="process icon"
              />
              <div>
                <p>Simple 🔎 process</p>
              </div>
            </div>
            <h1>Understand The Business Process.</h1>
          </div>
          <div className={styles.rightcol}>
            <p>
              We strive to develop real-world web solutions that are ideal for
              small to large projects with bespoke project requirements.
            </p>
            <div className={styles.projectbtn}>
              More projects
              <Image src="/image/whitearrow.svg" alt="arrow" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carousel}>
        <div
          className={`${styles.carouselBtn} ${styles.left}`}
          onClick={handlePrev}
        >
          <Image src="/image/Arrow right.svg" alt="right arrow" width={70} height={70} />
        </div>
        <div className={styles.carouselTrack}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.carouselItem} ${
                index === currentIndex ? styles.active : ""
              }`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <Image src={image.src} alt={image.caption || "Image"} width={600} height={400} />
              <p>{image.caption}</p>
            </div>
          ))}
        </div>
        <div
          className={`${styles.carouselBtn} ${styles.right}`}
          onClick={handleNext}
        >
          <Image src="/image/Arrow left.svg" alt="left arrow" width={70} height={70} />
        </div>
      </div>
    </div>
  );
}
