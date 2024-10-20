
import React from 'react'
import caseStudies from '../utils/caseStudies'
import { MdOutlineArrowOutward } from "react-icons/md";
import variants from '../utils/variants'
import { motion } from 'framer-motion';
const CaseStudies = () => {
  return (
    <div>
      <section className='pt-10 pb-10 bg-slate-200' id='UseCases'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center items-center'>
            {/* part 1 headlines */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            Viewport={{amount: 0.1}}
            variants={variants('right', 0.2)}
            className='flex flex-col sm:flex-row gap-4 mb-10'>
                <button className='px-4 py-2 inline-block font-semibold bg-slate-600 rounded-md text-white hover:bg-primary hover:text-black transition-all duration-300 text-38'>
                Case Studies
                </button>
                <div>
                    <p className='md:w-2/3'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
                </div>
            </motion.div>

        {/* second part */}
        <motion.div 
        initial="hidden"
        whileInView="visible"
        Viewport={{amount: 0.1}}
        variants={variants('left', 0.2)}
        className="p-8 bg-black rounded-md text-white ">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>
                {
                    caseStudies.map((study, index) => (
                        <div key={index} className='p-4 border border-gray-700 rounded-lg hover:text-black transition-all duration-500 hover:bg-white'>
                            <h3 className='text-xl font-semibold mb-4 '>
                                {study.title }
                            <p className='mb-4'>{study.description}</p>
                                <a href=""className='text-orange-500 flex items-center hover:underline underline-offset-4 '>Learn More <MdOutlineArrowOutward className='ml-2'/></a>
                            </h3>

                        </div>
                    ))
                }
            </div>
        </motion.div>


                

            </div>
        </section>
      
    </div>
  )
}

export default CaseStudies
