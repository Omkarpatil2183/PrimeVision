import React from 'react'
import contact from '../assets/contact.png'
import variants from '../utils/variants'
import { motion } from 'framer-motion';
const Contact = () => {
    return (
        <section className='pt-24 pb-8 bg-white ' id='contact'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>

                <motion.div
                initial="hidden"
                whileInView="visible"
                Viewport={{amount: 0.1}}
                variants={variants('right', 0.2)}
                className='flex flex-col md:flex-row gap-4 mb-12'>
                    <button className='px-4 py-2 inline-block font-semibold bg-slate-600 rounded-md text-white hover:bg-primary hover:text-black transition-all duration-300 text-38'>
                        Contact Us
                    </button>
                    <div>
                        <p className='md:w-2/3'>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
                    </div>
                </motion.div>

                {/* contact form */}

                <motion.div 
                initial="hidden"
                whileInView="visible"
                Viewport={{amount: 0.1}}
                variants={variants('bottom', 0.2)}
                className='flex flex-col md:flex-row rounded-md md:p-8 justify-between p-4 bg-slate-400'>
                    <div className='w-full md:w-1/2 p-4'>
                        <form className='space-y-4' >
                            {/* radio buttuns */}
                            <div className='flex flex-col md:flex-row md:space-x-4 items-start justify-start'>
                                <label className='flex items-center'><input type="radio" name='contact-type' className='size-4 mr-2' value='hi' />Say Hi!</label>
                                <label className='flex items-center mt-2 md:mt-0'><input type="radio" name='contact-type' className='size-4 mr-2' value='Quote' />Get a Quote</label>
                            </div>

                            {/* name input  */}
                            <div>
                                <label className='block font-medium text-lg text-white'>Name :</label>
                                <input type="text" name='name ' className='mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring ring-primary' placeholder='Mr. Om' />
                            </div>

                            {/* email sathi  */}
                            <div>
                                <label className='block font-medium text-lg text-white'>E-mail :</label>
                                <input type="email" name='name ' className='mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring ring-primary' placeholder='omkarpatil3821@gmail.com'/>
                            </div>

                            {/* text area  */}
                            <div>
                                <label className='block font-medium text-lg text-white'>Message :</label>
                                <textarea rows='6' className='mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring ring-primary'  name="message" id="message" placeholder='Write a messege here...'></textarea>
                            </div>

                            <button  type='submit'className='px-4 py-2 inline-block font-semibold bg-slate-600 rounded-md text-white hover:bg-primary hover:text-black transition-all duration-300 mt-4'>Submit</button>
                            


                        </form>
                    </div>

                    {/* image section  */}
                    <div className='relative md:flex justify-end items-center md:w-1/2 md:m-8'>
                    <img src={contact}
                    alt="image" className='md:absolute md:block hidden top-0 bottom-0 h-full' />

                    </div>
                   
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
