import React from 'react'

function index({icon, title, context}) {
  return (
    <div className='gap-[10px] flex flex-col sm:items-start text-center max-w-[373.33px] min-h-fit items-center sm:text-start'>
        <img className='h-20' src={icon} alt=""/>
        <h3 className='font-medium text-[#0F172A] text-xl leading-[22px]'>{title}</h3>
        <p className='font-normal text-lg leading-[28.8px] text-[#0F172A]'>{context}</p>
    </div>
  )
}

export default index