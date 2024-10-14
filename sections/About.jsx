'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Geological Ages" textStyles="text-center text-gray-700" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-gray-500"
      >
        The <span className="font-extrabold text-gray-800">geological ages</span> take us
        on a journey through time, spanning millions of years. From the ancient
        <span className="font-extrabold text-gray-800"> Precambrian</span> to the more
        recent <span className="font-extrabold text-gray-800">Cenozoic era</span>, we
        witness the Earth's transformation through various epochs. The layers of
        Earth beneath us hold the story of the{' '}
        <span className="font-extrabold text-gray-800">evolution of life</span> and
        the dramatic shifts in climate and geography. Let's{' '}
        <span className="font-extrabold text-gray-800">explore</span> the history of
        our planet by scrolling down and learning more about the fascinating
        <span className="font-extrabold text-gray-800"> timeline of Earth's history</span>.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
