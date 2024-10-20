import React from 'react'
import { BsChatQuote } from 'react-icons/bs'
import variants from '../utils/variants'
import { motion } from 'framer-motion';
import testimonialsData from '../utils/testimonialsData'
const Testimonials = () => {
  return (
    <section className='pt-24 pb-8 bg-white ' id='Testimonials'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>

        <motion.div
        initial="hidden"
        whileInView="visible"
        Viewport={{amount: 0.1}}
        variants={variants('right', 0.2)}
        className='flex flex-col sm:flex-row gap-4 mb-10'>
          <button className='px-4 py-2 inline-block font-semibold bg-slate-600 rounded-md text-white hover:bg-primary hover:text-black transition-all duration-300 text-38'>
            Testimonials
          </button>
          <div>
            <p className='md:w-2/3'>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
          </div>
        </motion.div>

      {/* slider */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      Viewport={{amount: 0.1}}
      variants={variants('bottom', 0.2)}
      className='relative mb-12'>
        <div className='flex flex-col md:flex-row max-w-7xl mx-auto  '>
          {
            testimonialsData.slice(0,3).map((testimonial ,index) => (
              <div key={index} className='w-full relative py-5 md:max-w-md px-2'>
                <div className='absolute top-0 left-0 z-30'>
                  <BsChatQuote className='size-8'/>
                </div>

                <div className='h-48 md:h-48 sm:h-40 hover:bg-primary rounded-lg border hover:border-blacck shadow-lg cursor-pointer transition-all duration-300 p-6 hover:shadow-2xl'>
                  <p className='text-base font-medium mb-4 '>{testimonial.text}</p>
                  <p className='text-sm font-semibold text-gray-700'>{testimonial.author}</p>

                </div>


              </div>
            ))
          }
        </div>

      </motion.div>



      </div>
    </section>
  )
}

export default Testimonials
