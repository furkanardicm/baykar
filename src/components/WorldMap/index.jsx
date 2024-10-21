import React from 'react'

function index() {
  return (
    <section className='border-y-[#78350F] w-full border-y min-h-[717px] bg-[#78350F] items-center relative'>
        <div className="gap-8 absolute inset-0 flex flex-col justify-center items-center">
            <h1 className='font-extrabold text-5xl md:text-8xl text-[#FFFBEB] text-center leading-[52.8px] md:leading-[105.6px] w-full'>11,658,467</h1>
            <h2 className='text-[#FFFBEB] font-bold text-[32px] md:text-[56px] leading-[35.2px] md:leading-[61.6px] text-center w-full'>Shoes Collected</h2>

        </div>
        <div className="w-[1440px] min-h-[717px] max-h-max md:mx-auto overflow-hidden flex gap-20 p-20">
            <img className='bg-contain bg-no-repeat h-full bg-left md:bg-center md:mx-auto' src="/world/world.png" alt="" />
        </div>
    </section>

  )
}

export default index