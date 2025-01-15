import React from "react";
import Image from "next/image";

import styles from "../../styles/Project.module.css";

const Project = () => {
  return (
    <div className={styles.backgroundcard} id="Project">
    <div className="container">

    <div className={styles.projectinner}>
  {/* Left Column */}
  <div className={styles.leftcolp}>
    <div className={styles.inline}>
      <Image
        src="/image/projecticon.svg"
        alt=""
        width={42}
        height={42}
      />
      <p className={styles.sectionTagline}>Creative ✨ Approach</p>
    </div>
    <h1 className={styles.sectionTitle}>Take A Look At Our Recent Work</h1>
    <div>
      <Image
        src="/image/projectimg1.svg"
        alt=""
        width={617}
        height={488}
      />
      <p className={styles.projectYear}>• 2024  • Cary Neville</p>
      <h3 className={styles.projectTitle}>
        A Workplace Consultancy Creating Inspiring Environments
      </h3>
    </div>
    <div>
      <Image
        src="/image/projectimg2.svg"
        alt=""
        width={617}
        height={488}
      />
      <p className={styles.projectYear}>• 2024  • Cary Neville</p>
      <h3 className={styles.projectTitle}>
        A Workplace Consultancy Creating Inspiring Environments
      </h3>
    </div>
  </div>

  {/* Right Column */}
  <div className={styles.rightcolp}>
    <div>
      <picture>
      <source media="(max-width: 426px)" srcSet="/image/projectimg3.svg" />

      <Image
        src="/image/projectimgpc.svg"
        alt=""
        width={617}
        height={488}
      />
      </picture>
      <p className={styles.projectYear}>• 2024  • Cary Neville</p>
      <h3 className={styles.projectTitle}>
        A Workplace Consultancy Creating Inspiring Environments
      </h3>
    </div>
    <div>
      <Image
        src="/image/projectimg4.svg"
        alt=""
        width={617}
        height={488}
      />
      <p className={styles.projectYear}>• 2024  • Cary Neville</p>
      <h3 className={styles.projectTitle}>
        A Workplace Consultancy Creating Inspiring Environments
      </h3>
    </div>
    <div className={styles.sidepara}>
      <p>
        We strive to develop real-world web solutions that are ideal for small
        to large projects with bespoke project requirements.
      </p>
    </div>
    <div className={styles.projectbtn}>
      More projects
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

  );
};

export default Project;
