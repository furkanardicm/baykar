import React from 'react'

function index({key, logo, text, person, rank, profile}) {
  return (
    <div key={key} className='rounded-[20px] gap-8 max-h-[430px] min-h-[296px] bg-white border border-[#E2E8F0] min-w-[319px] max-w-[384px] text-balance  justify-center'>
      <div className="flex flex-col gap-4 p-8">
        <div className="w-full">
          <div className="w-full py-4">
            <img className='h-8' src={logo} alt="" />
          </div> 
          <p className='font-normal text-2xl leading-[38.4px] max-w-[320px] text-balance'>{text}</p>
          <div className="pt-4 gap-4 flex">
            <img width="64px" src={profile} alt="" />
            <div className="flex flex-col w-[240px] justify-center">
              <span className='font-normal text-lg text-black leading-[28.8px]'>{person}</span>
              <span className='font-normal text-base leading-[22.4px] text-[#475569]'>{rank}</span>
            </div>
          </div>
        </div>
      </div>
  </div>

  )
}

export default index