import React from 'react'
import LandingDatasFrame from '../LandingDatasFrame'
function index() {
  return (
    <section className='gap-20 p-20 flex items-center justify-center h-fit bg-transparent max-w-[1280px] w-screen mx-auto z-20 md:bg-transparent bg-[#fef3c7]'>
      <div className="flex md:flex-row flex-col gap-20">
        <LandingDatasFrame icon={"/1_icon.png"} title={"Nibh viverra"} context={"Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "}></LandingDatasFrame>
        <LandingDatasFrame icon={"/2_icon.png"} title={"Cursus amet"} context={"Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "}></LandingDatasFrame>
        <LandingDatasFrame icon={"/3_icon.png"} title={"Ipsum fermentum"} context={"Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "}></LandingDatasFrame>
      </div>
    </section>
  )
}

export default index