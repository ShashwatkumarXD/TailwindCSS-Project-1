import React from 'react'
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className='flex justify-between'>

        <div className='flex items-center justify-center gap-5'>
          <img src="./assets/Logo.svg" alt="logo" className='lg:h-[40px]'/>
          <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl lg:px-4 lg:py-3'>Hoster is hiring</button>
        </div>

        <ul className='hidden lg:flex gap-7 items-center font-lato text-gray-600'>
          <li><a className='hover:cursor-pointer hover:text-black' href='#'>Plans</a></li>
          <li><a className='hover:text-black' href='#'>Find Domain</a></li>
          <li><a className='hover:text-black' href='#'>Why Hoster</a></li>
        </ul>

        <div className='hidden lg:flex justify-center items-center gap-5'>
          <a className='font-bold' href='#'>Sign In</a>
          <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
        </div>

        <div className='lg:hidden'>
          <FaBars />
        </div>

      </div>

      {/* <div className='hidden lg:flex'>
        <div className='flex items-center justify-center gap-2'>
          <img src="./assets/Logo.svg" alt="logo" />
          <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl '>Hoster is hiring</button>
        </div>
      </div> */}
    </div>
  )
}

export default Header