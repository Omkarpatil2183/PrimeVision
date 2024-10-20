import React, { useEffect, useState } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const toggleMenu = () => {
    setIsopen(!isopen);
  };

  const handleMenuclick = (name) => {
    setActiveItem(name);
    setIsopen(false);
  };

  const navitems = [
    { name: 'Home', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Use Cases', href: '#UseCases' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#Testimonials' },
  ];

  useEffect(() => {
    // Example of using navitems in an effect if needed
    const sections = navitems.map(item => document.querySelector(item.href));
    // You can add logic for observing sections or something similar
  }, [navitems]);

  return (
    <nav className='fixed top-0 z-50 bg-lime-100 w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          {/* Logo */}
          <div>
            <a href="/"><img src="/logo.png" alt="Logo" className='h-8' /></a>
          </div>

          {/* Nav items for larger devices */}
          <div className='space-x-8 hidden md:flex items-center'>
            {navitems.map((item, index) => (
              <a
                onClick={() => handleMenuclick(item.name)}
                className={`text-black px-2 hover:font-semibold rounded hover:underline underline-offset-4 transition-all duration-250 ${
                  activeItem === item.name ? 'text-black bg-primary hover:underline underline-offset-4' : 'bg-lime-100'
                }`}
                key={index}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
            <a className='border px-4 py-1.5 border-black hover:bg-primary hover:font-semibold rounded-md transition-all duration-300' href="#contact" >
              Request a quote
            </a>
          </div>

          {/* Mobile menu */}
          <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu} className='text-gray focus:outline-none'>
              {isopen ? <IoCloseSharp className='text-2xl' /> : <RiMenu3Line className='text-2xl' />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu items for mobile view */}
      {isopen && (
        <div className='md:hidden bg-gray shadow-xl'>
          <div className='px-4 pt-2 pb-3 space-y-1.5 sm:px-3'>
            {navitems.map((item, index) => (
              <a
                onClick={() => handleMenuclick(item.name)}
                className={`block text-black px-2 hover:bg-primary rounded hover:underline underline-offset-4 transition-all duration-250 ${
                  activeItem === item.name ? 'text-primary underline underline-offset-4' : ''
                }`}
                key={index}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
            <a className='block border px-4 py-1.5 border-black hover:bg-primary rounded-md transition-all duration-300' href="#contact">
              Request a quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
