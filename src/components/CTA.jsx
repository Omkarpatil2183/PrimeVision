import React from 'react'
import CTAimage from '../assets/team/ctaImage.png'
import variants from '../utils/variants'
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className='relative py-12'>
        <div className='max-w-7xl mx-auto bg-[#F3F3F3] rounded-md sm:pt-24 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8'>

            {/* left side  */}

            <motion.div
            initial="hidden"
            whileInView="visible"
            Viewport={{amount: 0.1}}
            variants={variants('left', 0.2)}
            className='md:w-1/2 text-center md:text-left mb-8 md:mb-0'>
            <h1 className='text-4xl font-bold text-secondary mb-4 '>
            Let’s make things happen
                </h1>
                <p className='text-gray mb-6 md:w-2/3'>
                Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                </p>
                <button className='px-4 py-2 inline-block font-semibold bg-slate-600 rounded-md text-white hover:bg-primary hover:text-black transition-all duration-300'>Get your free proposal</button>
            </motion.div>


            {/* right side  */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            Viewport={{amount: 0.1}}
            variants={variants('right', 0.2)}
            className='md:w-1/2 flex flex-col md:flex-row items-center justify-center relative'>
            <img src={CTAimage} alt="image" className='md:absolute md:-top-52 md:bottom-0' style={{transform:'scale(1.05)'}}/>
            </motion.div>
        </div>
    </section>
  )
}

export default CTA;
