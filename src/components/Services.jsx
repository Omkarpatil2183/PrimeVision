import React from 'react'
import { servicesData } from '../utils/services'
import linkIcon from '../assets/team/linkIcon.png'
import { motion } from 'framer-motion';
import variants from '../utils/variants'


const Services = () => {
  return (
    <div>
      <section className='pt-20 pb-16 bg-slate-200' id='services'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center items-center'>
            {/* part 1 headlines */}
            <motion.div 
            initial="hidden"
            whileInView="visible"
            Viewport={{amount: 0.1}}
            variants={variants('right', 0.2)}
            className='flex flex-col sm:flex-row gap-4 mb-10'>
                <button className='px-4 py-2 inline-block font-semibold bg-slate-600 rounded-md text-white hover:bg-primary hover:text-black transition-all duration-300 text-38'>
                    Services
                </button>
                <div>
                    <p className='md:w-2/3'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
                </div>
            </motion.div>


            {/* part 2 Services cards */}

            <div className='grid grid-cols-1 md:grid-cols-2  gap-6'> 
                {
                    servicesData.map((service, index) =>
                    (
                      <motion.div
                      initial="hidden"
                      whileInView="visible"
                      Viewport={{amount: 0.1}}
                      variants={variants('bottom', 0.2)}
                      key={index} className={`flex flex-col md:flex-row md:justify-between md:items-center gap-6 p-6 rounded-lg border border-[#191A23]cursor-pointer ${service.backgroundColor} ${service.textColor} `}>

                        <div className='flex flex-col h-full md:w-1/2 justify-between'>

                          <button className={`text-xl py-1.5 font-semibold mb-2 rounded-sm sm:w-60 ${service.foregroundColor} `}>
                            {service.title}
                          </button>

                          <a href="#" className='flex items-center gap-4 py-2 rounded-md text-black hover:bg-opacity-85 hover:text-orange-700 transition-all ease-in-out duration-300'><img src={linkIcon} alt="" className='cursor-pointer size-6 rounded-full' /> 
                          
                          <span className='text-left cursor-pointer font-medium'>Learn More..</span>
                          </a>
                        </div>

                        <div className='md:w-1/2 order-first md:order-last'>
                          <img src={service.image} alt="" className='w-full object-cover cursor-pointer rounded-md mb-4 ' />
                        </div>

                      </motion.div>

                    ))
                }

            </div>


        </div>
      </section>
    </div>
  )
}

export default Services
