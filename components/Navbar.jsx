'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <Link href="/" className="font-extrabold text-[24px] leading-[30.24px] text-white rounded focus:outline-none focus:ring focus:border-blue-300">
            Bob Ross V2
        </Link>
      <Link href="/paint" className="font-extrabold text-[24px] leading-[30.24px] text-white rounded focus:outline-none focus:ring focus:border-blue-300">
            Paint
        </Link>
        <Link href="/aipaint" className="font-extrabold text-[24px] leading-[30.24px] text-white rounded focus:outline-none focus:ring focus:border-blue-300">
            AI Image
        </Link>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
      
    </div>
  </motion.nav>
);

export default Navbar;
