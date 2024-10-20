import React, { useState } from 'react';
import processSteps from '../utils/processSteps.js';
// import  { FaMinusCircle } from "react-icons/fa";
// import { FaCirclePlus }  from "react-icons/fa6";
import variants from '../utils/variants'
import { motion } from 'framer-motion';

const WorkingProcess = () => {
  // State to track the currently open step
  const [openIndex, setopenIndex] = useState(null);

  // Function to handle toggling of steps
  const toggleStep = (index) => {
    setopenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='pt-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
        initial="hidden"
        whileInView="visible"
        Viewport={{amount: 0.1}}
        variants={variants('right', 0.2)}
        className='flex flex-col sm:flex-row gap-4 mb-10'>
          <button className='px-4 py-2 inline-block font-semibold bg-slate-600 rounded-md text-white hover:bg-primary hover:text-black transition-all duration-300 text-38'>
            Our Working Process 
          </button>
          <div>
            <p className='md:w-3/5'>Step-by-Step Guide to Achieving Your Business Goals</p>
          </div>
        </motion.div>
        
        <motion.div
        initial="hidden"
        whileInView="visible"
        Viewport={{amount: 0.1}}
        variants={variants('bottom', 0.2)}
        >
          {
            processSteps.map((step, i) => (
              <div key={i}>
                <button 
                  className={`w-full text-left p-4 flex justify-between items-center ${openIndex === i ? 'bg-primary' : 'bg-slate-50'}`}
                  onClick={() => toggleStep(i)} // Adding event handler here
                >
                  <div className='flex items-center'>
                    <span className='font-extrabold text-secondary text-2xl mr-4'>
                      {step.number}
                    </span>
                    <h3 className='text-lg font-semibold'>
                      {step.question}
                    </h3>
                  </div>

                  {/* <div className='bg-white text-black border p-1.5 rounded-full'>
                    {openIndex === i ? (<FaMinusCircle />) : (<FaCirclePlus />)}
                  </div> */}
                </button>
                {
                  openIndex === i && (
                    <div className='p-4 bg-primary text-secondary'>
                      <hr />
                      <p className='mt-0 mb-5 border-black text-lg'>
                        {step.answer} {/* Show the answer or content when step is open */}
                      </p>
                    </div>
                  )
                }
              </div>
            ))
          }
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingProcess;
