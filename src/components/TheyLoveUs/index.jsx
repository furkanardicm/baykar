import React from 'react'
import CarouselCard from '../CarouselCard'

function index() {
  return (
    <section className='flex flex-col p-20 gap-20 items-center justify-center relative'>
        <div className="max-w-[1280px] gap-12 flex flex-row items-center">
            <h2 className='font-extrabold text-[56px] w-[1112px] leading-[61.6px] text-[#0F172A]'>Because they love us</h2>
            <div className="gap-6 flex">
                <button className='rounded-full border-2 border-[#78350F] flex p-3 items-center'>
                    <i>
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M18.5 12H6H18.5ZM6 12L12 6L6 12ZM6 12L12 18L6 12Z" fill="#78350F"/>
                            <path d="M6 12L12 18M18.5 12H6H18.5ZM6 12L12 6L6 12Z" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </i>
                </button>
                <button className='rounded-full border-2 border-[#78350F] flex p-3 items-center'>
                    <i>
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12ZM18.5 12L12.5 18L18.5 12Z" fill="#78350F"/>
                            <path d="M18.5 12L12.5 18M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12Z" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </i>
                </button>
            </div>
        </div>
        <div className="absolute bg-yellow-200 z-10 w-[1360px] h-[420px] mt-10"></div>
        <div className="flex gap-6 flex-row overflow-x-visible justify-center max-w-[1280px] z-20">
            <CarouselCard logo="/logo1.png" text="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla." person="Hellena John" rank="Co-founder" profile="/pp/pp1.png"/>
            <CarouselCard logo="/logo2.png" text="A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed." person="David Oshodi" rank="Manager" profile="/pp/pp2.png"/>
            <CarouselCard logo="/logo3.png" text="Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque." person="Category" rank="Category" profile="/pp/pp3.png"/>
            <CarouselCard logo="/logo4.png" text="Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se." person="Hellen Jummy" rank="Team Lead" profile="/pp/pp4.png"/>
            <CarouselCard logo="/logo1.png" text="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla." person="Hellena John" rank="Co-founder" profile="/pp/pp1.png"/>
            <CarouselCard logo="/logo2.png" text="A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed." person="David Oshodi" rank="Manager" profile="/pp/pp2.png"/>
            <CarouselCard logo="/logo3.png" text="Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque." person="Category" rank="Category" profile="/pp/pp3.png"/>
            <CarouselCard logo="/logo4.png" text="Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se." person="Hellen Jummy" rank="Team Lead" profile="/pp/pp4.png"/>
        </div>
    </section>
  )
}

export default index