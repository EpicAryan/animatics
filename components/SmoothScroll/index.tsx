'use client'

import Image1 from "./assets/1.jpg";
import Image2 from "./assets/2.jpg";
import Image3 from "./assets/3.jpg";
import Image4 from "./assets/4.png";
import Image5 from "./assets/5.webp";
import Image6 from "./assets/6.jpg";
import Image7 from "./assets/7.webp";
import Image8 from "./assets/8.jpg";
import Image9 from "./assets/9.jpg";
import Image10 from "./assets/10.jpg";
import Image11 from "./assets/11.webp";
import Image12 from "./assets/12.jpg";
import Image from "next/image";
import { StaticImageData } from 'next/image';
import styles from "./SmoothScroll.module.scss";
import { useTransform, useScroll, motion ,MotionValue} from "framer-motion";
import { useRef } from "react";
import useDimension from "@/hooks/useDimension";



const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
]

const SmoothScroll = () => {

    const container = useRef(null);
    const {height} = useDimension();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  return (
    <main className="">
        <div className={styles.spacer}></div>
        <div ref={container} className={styles.gallery}>
            <div className={styles.galleryWrapper}>
                <Column images={[images[0], images[1], images[2]]} y={y} />
                <Column images={[images[3], images[4], images[5]]} y={y2}/>
                <Column images={[images[6], images[7], images[8]]} y={y3}/>
                <Column images={[images[11], images[10], images[9]]} y={y4}/>
            </div>
        </div>
        <div className={styles.spacer}></div>
    </main>
  )
}

export default SmoothScroll

interface ColumnProps {
    images:StaticImageData[];
    y?: MotionValue<number>;
}

const Column: React.FC<ColumnProps> = ({images, y=0}) => {
    return (
        <motion.div style={{y}} className={styles.column}>
            {
                images.map((src,index)=>{
                    return <div key={index} className={styles.imageContainer}>
                        <Image src={src} alt={`image-${index}`} fill placeholder="blur"  blurDataURL="data:image/jpeg;base64,..." />
                    </div>
                })
            }
        </motion.div>
    )
}