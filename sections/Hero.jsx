'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading} text-[rgba(139,69,19,0.9)]`} // Earthy brown text
        >
          Geological
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.heroHeading} text-[rgba(107,142,35,0.9)]`}>A</h1> {/* Olive green for contrast */}
          <h1 className={`${styles.heroHeading} text-[rgba(139,69,19,0.9)]`}>ges</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] bg-gradient-to-r from-[rgba(85,107,47,0.8)] to-[rgba(222,184,135,0.8)] rounded-tl-[140px] z-[0] -top-[30px]" /> {/* Earthy gradient */}
        <img
          src="/geological_era.jpg" // Update with an image representing geological eras (e.g., fossils, dinosaurs)
          alt="geological_era_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.jpg" // Update with a stamp image related to fossils or geological markers
              alt="fossil_stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain opacity-90"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
