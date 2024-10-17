import React from 'react'

function index() {
  return (
    <div className="p-4 md:py-6 md:px-4 justify-between h-full flex items-center max-w-[1280px] mx-auto">
      <h5 className='text-[#78350F] text-[32px] font-bold leading-[35.2px]'>Collers</h5>

      {/* Desktop */}
      <ul className='hidden lg:flex lg:flex-row gap-4 items-center text-base font-medium leading-6 text-[#78350F]'>
        <li className='py-2 px-3'><a href="">Products</a></li>
        <li className='py-2 px-3'><a href="">Solutions</a></li>
        <li className='py-2 px-3'><a href="">Pricing</a></li>
        <li className='py-2 px-3'><a href="">Resources</a></li>
        <li className='py-2 px-3'><a href="">Log In</a></li>
        <button className='p-3 border-2 border-[#78350F] rounded-lg' type="button"><span className='px-4 tracking-[0.5px]'>Sign up now</span></button>
      </ul>

      {/* Mobil & Tablet */}
      <button className='lg:hidden'>
        <svg width="24" height="25" viewBox="0 0 24 25">
          <path d="M21 5.5H13" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 12.5H8" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 19.5H3" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

export default index