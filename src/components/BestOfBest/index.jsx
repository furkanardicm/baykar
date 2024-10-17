import React from 'react'
import BestCard from '../BestCard'

function index() {
    const onClicked = () => {
        console.log("Hi World!")
    }
  return (
    <section className='gap-20 p-20 bg-[#0F172A] border-[#E2E8F0] border-y-1 flex flex-col text-nowrap w-screen relative -z-10'>
        <div className="flex lg:flex-row flex-col gap-20 justify-between lg:justify-around mx-auto max-w-[1280px] items-center">
            <h1 className='font-extrabold text-[32px] lg:text-[56px] leading-[61.6px] text-white'>The best of the best</h1>
            <button className='border-2 border-white px-5 py-4 rounded-lg' type="button"><span className='float-right text-2xl leading-6 font-bold text-white'>Sign up now</span></button>
        </div>
        <div className="gap-12 flex relative justify-center items-center lg:flex-row flex-col">            
            <BestCard title={"Title"} img={"/shoe2.png"} context={"Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."} action={onClicked}></BestCard>
            <BestCard title={"Title"} img={"/shoe3.png"} context={"Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."} action={onClicked}></BestCard>
            <BestCard title={"Title"} img={"/shoe4.png"} context={"Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."} action={onClicked}></BestCard>
            <img className='absolute scale-150 lg:scale-75 aspect-auto lg:rotate-0 rotate-90 bg-contain bg-center' src="/bg.png" alt=""/>
        </div> 
    </section>
  )
}

export default index