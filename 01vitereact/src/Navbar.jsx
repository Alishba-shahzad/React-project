import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="bg-gray-800 text-white p-4">
      
      <div className="container mx-auto flex justify-between items-center">
        
        <h1 className="text-2xl font-bold">MyWebsite</h1>

        <ul className="hidden md:flex gap-6">
          <a href="" className='hover:bg-gray-400 cursor-pointer'>Home</a>
          <a href="" className='hover:bg-gray-400 cursor-pointer'>About</a>
          <a href="" className='hover:bg-gray-400 cursor-pointer'>Contact</a>
          
        </ul>

        <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"} 
        </button>

      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-center bg-gray-700 p-4 rounded">
          <li className="hover:text-gray-300">Home</li>
          <li className="hover:text-gray-300">About</li>
          <li className="hover:text-gray-300">Contact</li>
        </ul>
      )}

    </nav>
  );
};

export default Navbar;