import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {

  useEffect(() => {
    const typewriter = new Typewriter('#typewriter', {
      strings: ["Web Developer", "Web Designer", "UI/UX Designer"],
      autoStart: true,
      loop: true,
    });
  }, []);
  
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-green-500' />
          <div className='w-1 sm:h-80 h-40 green-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>
            Hi, I'm <span className='text-green-500'>Dom</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            <span id="typewriter"></span>
          </p>
        </div>
      </div>


      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-black flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-black mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
