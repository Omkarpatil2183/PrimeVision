import React from 'react'
import banner from "../assets/banner.png"
import LogoCarousel from './LogoCarousel'
// import { motion } from "./LogoCarousel"
import { motion } from 'framer-motion';

import variants from '../utils/variants'

const Home = () => {
  return (
    <section className='bg-white pt-1' id='about'> 

        <div className='max-w-7xl  px-4 sm:px-6 lg:px-8 py-1 md:py-24'>
            <div className='flex flex-col gap-6 md:flex-row'>

                {/* left  */}
                <div className='md:w-70 pl-0 ml-0  '>
                <div className='w-2/3 m-auto ' >
                <motion.h1 
                initial="hidden"
                whileInView="visible"
                Viewport={{amount: 0.1}}
                variants={variants('bottom', 0.2)}
                className='text-5xl font-bold text-secondary mb-4 mr-3 ml-2 mt-16'>
                Navigating the digital landscape for <span className='text-blue-500'>success</span>
                </motion.h1>
                <motion.p c
                initial="hidden"
                whileInView="visible"
                Viewport={{amount: 0.1}}
                variants={variants('bottom', 0.5)}
                lassName='text-gray mb-6 '>
                Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </motion.p>
                <motion.button 
                initial="hidden"
                whileInView="visible"
                Viewport={{amount: 0.1}}
                variants={variants('bottom', 0.7)}
                className='px-4 py-2 mt-5 inline-block font-semibold bg-orange-400 border-black-500 rounded-md text-slate-700 hover:bg-primary hover:text-black transition-all duration-300'>Book a consultation</motion.button>
                </div>
                </div>


                {/* right side */}
                <div className='md:w-1/2 sm:mt-18  sm:pt-10 order-first md:order-last'>
                <motion.img 
                initial="hidden"
                whileInView="visible"
                Viewport={{amount: 0.1}}
                variants={variants('bottom', 0.5)}
                src={banner} alt="" className='w-full mt-10 h-auto rounded ' />
                </div>

            </div>

            {/* logos */}
            <LogoCarousel/>



        </div>
    </section>
  )
}

export default Home
