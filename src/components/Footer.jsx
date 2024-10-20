import React from 'react'
import footerLogo from '../assets/footer-logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import FooterContact from './FooterContact';
import variants from '../utils/variants'
import { motion } from 'framer-motion';
const Footer = () => {
  return (

<footer className='max-w-7xl mx-auto sm:px-6 lg:px-8 mb-8'>
<motion.div
initial="hidden"
whileInView="visible"
Viewport={{amount: 0.1}}
variants={variants('bottom', 0.2)}
className='bg-black rounded-t-2xl'>

  {/* fiest section  */}
<div className='flex flex-col md:flex-row md:justify-between gap-6 md:items-center px-4 py-12 sm:px-6 lg:px-8'>
    {/* logos  */}
    <div href="#about">
        <img src={footerLogo}  alt="footerLogo" className='h-8 '/>
    </div>

    {/* menu items  */}
    <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8'>
    <a href="#about"className='text-white hover:text-primary'>Home</a>
    <a href="#contact"className='text-white hover:text-primary'>About us</a>
    <a href="#services"className='text-white hover:text-primary'>Services</a>
    <a href="#UseCases"className='text-white hover:text-primary'>use Cases</a>
    <a href="#contact"className='text-white hover:text-primary'>Contact</a>
    </div>

    {/* SOCIAL ICONS  */}.
    <div className='flex md:justify-end space-x-4'>
      <a href="#" className='p-1.5  text-black bg-white rounded-full' >
        <FaFacebook  className=' hover:text-gray '/>
        
       
      </a> 
      <a href="https://x.com/OmkarPatil2183" target="_blank" className='p-1.5  text-black bg-white rounded-full'><FaTwitter   className=' hover:text-gray '/></a>
      <a href="https://www.linkedin.com/in/omkar-patil-128206312/" target="_blank" className='p-1.5  text-black bg-white rounded-full'> <FaLinkedin  className=' hover:text-gray '/></a>
    </div>
    
</div>


{/* second section  contact and newsletter*/}
<FooterContact/>



</motion.div>
</footer>
  )
}

export default Footer
