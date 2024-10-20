import React from 'react'

const FooterContact = () => {
  return (
    <>
<div className='flex flex-col md:flex-row py-8 px-4 lg:px-8 sm:px-6 gap-8 '>
    
    {/* left side  */}
    <div className='flex-1 space-y-4  '>
        <button className='bg-primary text-black px-6 py-2 rounded-md font-medium'>
            Contact
        </button>

        <div className='text-white space-y-3'>
            <p>
                <strong>
                    Email :
                </strong> omkarpatil3821@gmail.com
            </p>
            <p>
                <strong>
                    Phone :
                </strong> 9972732607
            </p>
            <p>
                <strong>
                    Address :
                </strong> Belgaum
            </p>
        </div>

    </div>
    <div className='flex-1 bg-[#292432] justify-center items-center p-8 rounded-md'>

    <form className='flex items-center justify-center h-20 md:flex-row gap-4'>
        <input type="email" placeholder='example@gmail.com' className='flex-1 px-4 py-2 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary'/>

        <button className='bg-primary text-black px-6 py-2 rounded-md font-medium'>
            Hello
        </button>
    </form>
    </div >
    

</div>
    
    </>
  )
}

export default FooterContact
