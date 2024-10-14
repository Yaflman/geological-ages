'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { GEOLOGICAL_ERAS } from '../constants'; // Import the geological eras
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('MESOZOIC'); // Default active era

  // Convert geological eras object into an array for mapping
  const erasArray = Object.entries(GEOLOGICAL_ERAS).map(([key, era]) => ({
    id: key,
    ...era,
  }));

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Époques Géologiques" textStyles="text-center" />
        <TitleText
          title={<>Choisissez l'époque géologique que vous souhaitez <br className="md:block hidden" /> explorer</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {erasArray.map((era, index) => (
            <ExploreCard
              key={era.id}
              {...era} // Spread to pass all properties (id, name, start, end, periods)
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
