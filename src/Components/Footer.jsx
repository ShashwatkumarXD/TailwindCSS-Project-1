import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 items-center md:flex-row md:justify-between'>
      <ul className='flex gap-6 font-lato text-gray-600'>
        <li>
          <a className='hover:text-black' href='#'>Facebook</a>
        </li>
        <li>
          <a className='hover:text-black' href='#'>Instagram</a>
        </li>
        <li>
          <a className='hover:text-black' href='#'>Twitter</a>
        </li>
      </ul>

      <div className='fixed bottom-0 left-2 opacity-20'>©shashwatkumar</div>

      <div className='lg:flex gap-4'>
        <img src="./assets/Help-Avatar.svg" alt="help" />
        <div className='flex gap-4 items-center lg:flex-col lg:items-start lg:gap-0'>
          <p className='font-bold text-2xl lg:pt-8'>Have any Questions?</p>
          <a className='pt-[3px] underline hover:scale-105' href='#'>Talk to a specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer