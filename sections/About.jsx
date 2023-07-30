'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import Link from 'next/link';

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
      <TypingText title="| About Bob Ross" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Bob Ross</span> was an iconic American painter, art instructor, and television host who gained widespread fame for his TV show "The Joy of Painting.". Through his show, which aired from 1983 to 1994, Bob Ross became a beloved figure, inspiring countless viewers to explore their artistic talents and fostering a philosophy of embracing mistakes as {' '}
        <span className="font-extrabold text-white">
        Happy little accidents.
        </span>{' '}
        His influence remains {' '}
        <span className="font-extrabold text-white">timeless</span> among aspiring artists and fans worldwide. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the madness
        of the Bob Ross by scrolling down
      </motion.p>

      <Link href="#explore">
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
      </Link>
    </motion.div>
  </section>
);

export default About;