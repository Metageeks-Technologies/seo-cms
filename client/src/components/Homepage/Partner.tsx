import React from 'react'
import Image from "next/image";
import styles from '../../styles/Partner.module.css'

const Partner = () => {
  return (
    <div className={styles.container}>
      <div className='container'>
      <div className={styles.imageSlider}>
        <Image src="/image/docusign.svg" alt="company logo" width={266} height={58} />
        <Image src="/image/maze.svg" alt="company logo" width={183} height={62}  />
        <Image src="/image/cultureamp.svg" alt="company logo" width={260} height={62} />
        <Image src="/image/hellosign.svg" alt="company logo" width={216} height={62} />
        <Image src="/image/attentive.svg" alt="company logo" width={266} height={58}  />
      </div>
      </div>
    </div>
  );
}

export default Partner
