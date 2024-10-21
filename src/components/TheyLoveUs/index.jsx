import React, { useRef } from 'react';
import CarouselCard from '../CarouselCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselData = [
    {
      logo: "/logo1.png",
      text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper",
      person: "Hellena John",
      rank: "Co-founder",
      profile: "/pp/pp1.png",
    },
    {
      logo: "/logo2.png",
      text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula",
      person: "David Oshodi",
      rank: "Manager",
      profile: "/pp/pp2.png",
    },
    {
      logo: "/logo3.png",
      text: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      person: "Category",
      rank: "Category",
      profile: "/pp/pp3.png",
    },
    {
      logo: "/logo4.png",
      text: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis.",
      person: "Hellen Jummy",
      rank: "Team Lead",
      profile: "/pp/pp4.png",
    }
];
  
function Index() {
    const sliderRef = useRef(null); 

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false, // Okları gizle
        Responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    arrows: false, // Okları gizle
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 640, // Mobil ekran boyutu için breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    arrows: false, // Okları gizle
                    infinite: true,
                    dots: false
                }
            }
        ],
    };

    return (
        <section className='flex flex-col p-20 gap-20 items-center justify-center relative'>
            <div className="max-w-[1280px] gap-12 flex flex-row items-center justify-center">
                <h2 className='font-bold text-nowrap md:font-extrabold text-[32px] md:text-[56px] md:w-[1112px] leading-[61.6px] text-[#0F172A]'>Because they love us</h2>
                <div className="gap-6 flex max-md:hidden">
                    <button 
                        className='rounded-full border-2 border-[#78350F] flex p-3 items-center'
                        onClick={() => sliderRef.current.slickPrev()} // Önceki slide'a git
                    >
                        <i>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M18.5 12H6H18.5ZM6 12L12 6L6 12ZM6 12L12 18L6 12Z" fill="#78350F"/>
                                <path d="M6 12L12 18M18.5 12H6H18.5ZM6 12L12 6L6 12Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </i>
                    </button>
                    <button 
                        className='rounded-full border-2 border-[#78350F] flex p-3 items-center'
                        onClick={() => sliderRef.current.slickNext()} // Sonraki slide'a git
                    >
                        <i>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12ZM18.5 12L12.5 18L18.5 12Z" fill="#78350F"/>
                                <path d="M18.5 12L12.5 18M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </i>
                    </button>
                </div>
            </div>
            <div className="absolute bg-yellow-200 z-10 w-[1360px] h-[420px] mt-10"></div>
            <div className="w-screen z-20 m-auto overflow-x-hidden">
                <Slider ref={sliderRef} {...settings}> {/* Ref'i Slider'a bağlayın */}
                    {carouselData.map((item, index) => (
                        <CarouselCard
                            key={index}
                            logo={item.logo} 
                            text={item.text} 
                            person={item.person} 
                            rank={item.rank} 
                            profile={item.profile}
                        />
                    ))}
                </Slider>
            </div>
        </section>
    );
}
  
export default Index;
