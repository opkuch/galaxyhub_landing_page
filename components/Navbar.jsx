'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import styles from '../styles'
import {navVariants} from '../utils/motion'
import searchIcon from '../public/search.svg'
const Navbar = () => (
  <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`${styles.xPaddings} py-8 relative`}>
    <div className="absolute w-[80%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <Image src="/search.svg" alt="search" className="object-contain" width={24} height={24}/>
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white uppercase">
          galaxyhub
        </h2>
        <Image src="/menu.svg" alt="menu" className="object-contain cursor-pointer" height={24} width={24}/>
      </div>
  </motion.nav>
);

export default Navbar;
