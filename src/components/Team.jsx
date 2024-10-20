import React, { useState } from 'react'
import teamData from '../utils/teamData'
import { FaLinkedin } from "react-icons/fa";
import variants from '../utils/variants'
import { motion } from 'framer-motion';

const Team = () => {
    const [visibleTeam, setvisibleTeam] = useState(5)
    const handleShowMore = () => {
        setvisibleTeam(prevCount => prevCount + 4
        )
    }

    return (
        <div>
            <section className='pt-24 pb-12 bg-white' id='team'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    Viewport={{amount: 0.1}}
                    variants={variants('right', 0.2)}
                    className='flex flex-col sm:flex-row gap-4 mb-10'>
                        <button className='px-4 py-2 inline-block font-semibold bg-slate-600 rounded-md text-white hover:bg-primary hover:text-black transition-all duration-300 text-38'>
                            Team
                        </button>
                        <div>
                            <p className='md:w-2/3'>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
                        </div>
                    </motion.div>

                    {/* team cards */}
                    <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    Viewport={{amount: 0.1}}
                    variants={variants('left', 0.2)}
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            teamData.slice(0, visibleTeam).map((member, index) => (
                                <div key={index} className='bg-white hover:bg-primary rounded-lg border  hover:border-primary shadow-lg cursor-pointer transition-all duration-300 p-6'>
                                    <div className='relative mb-4'>
                                        <div className='flex flex-col sm:flex-row sm:items-end items-start gap-4 justify-start'>
                                            <img src={member.image} alt="" className='rounded-full w-32 h-32 object-cover' />
                                            <div>
                                                <h3 className='text-xl 
                                     font-semibold'>
                                                    {member.name}

                                                </h3>
                                                <p className='text-gray'>{member.position}</p>

                                            </div>
                                            <a href="#" className='absolute top-0 right-0 bg-black hover:bg-primary  text-white hover:text-black cursor-pointer rounded-full p-2 transition-all duration-300;'><FaLinkedin className='size-5' /></a>
                                        </div>

                                    </div>
                                    <div className='px-2'>
                                        <hr className='my-4 border-gray' />
                                        <p className='text-black'>{
                                            member.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </motion.div>

                    {/* Show more btn */}

                    {
                        visibleTeam < teamData.length && (
                            <div className='flex justify-end w-full'>
                                <button onClick={handleShowMore} className='inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300 mt-5' >
                                    Show More Members
                                </button>
                            </div>

                        )

                    }



                </div>

            </section>
        </div>
    )
}

export default Team
