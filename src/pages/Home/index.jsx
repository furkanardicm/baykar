import React from 'react'
import LandingDatas from '../../components/LandingDatas'

function index() {
  return (
    <section className='relative flex flex-col items-center w-screen'>
      <section className='p-20 h-auto gap-20 flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto '>
        <div className="flex flex-col gap-12 h-fit max-w-[714px]">
          <div className="flex flex-col md:text-left gap-8 text-center items-center md:items-start">
            <h1 className='font-extrabold text-[#0F172A] tracking-tight leading-[79.2px] text-7xl'>Collectible Sneakers</h1>
            <p className='text-[#0F172A] text-lg leading-[28.8px] max-w-[714px]'>Sit elit feugiat turpis sed integer integer accumsan turpis. 
              Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
            <div className="flex gap-4">
              <button type="button" className='border-2 border-[#78350F] text-[#78350F] p-4 rounded-lg'><span className='text-[#78350F] text-xl leading-6 px-4'>Sign up now</span></button>
              <button type="button" className='text-[#78350F] flex items-center py-3 px-2'>
                <i>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM16.126 13.746L12.071 16.644C11.166 17.29 9.941 17.033 9.334 16.068C9.11494 15.7171 8.99918 15.3116 9 14.898V9.102C9 7.942 9.883 7 10.972 7C11.363 7 11.746 7.124 12.071 7.356L16.126 10.254C17.031 10.901 17.272 12.206 16.666 13.171C16.5251 13.3959 16.3417 13.5913 16.126 13.746ZM10.972 9.102V14.898L15.027 12L10.972 9.102Z" fill="#78350F"/>
                  </svg>
                </i>
                <span className='px-2 font-medium text-base leading-6'>Watch Now</span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex min-w-[361px] sm:min-w-[486px] h-fit">
          <img src="/shoe.png" width={"486px"} alt="shoe"/>
        </div>
      </section>
      <LandingDatas/>
      {/* <div className="absolute -bottom-[70px] h-full -z-10 flex items-center justify-center">
        <img height="806px" src="/triangle.png" alt="" />
      </div> */}
    </section>
  )
}

export default index