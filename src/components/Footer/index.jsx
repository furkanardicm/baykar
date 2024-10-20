import React from 'react'

function index() {
  return (
    <footer className='px-20 bg-[#0F172A] flex flex-col text-nowrap'>
        <div className="border-y border-[#334155] flex md:flex-row flex-col mx-auto py-12 gap-12">
            <ul className="flex flex-col text-nowrap w-[284px]">
              <li className='py-3 gap-2 flex font-medium text-base leading-[17.6px] text-white md:text-start md:justify-start justify-center'>Product</li>
              <li className='py-3 gap-2 flex md:justify-start justify-center'><a className='text-[#E2E8F0] font-normal text-base leading-[22.4px]' href="#">Pricing</a></li>
              <li className='py-3 gap-2 flex md:justify-start justify-center'><a className='text-[#E2E8F0] font-normal text-base leading-[22.4px]' href="#">Overview</a></li>
              <li className='py-3 gap-2 flex md:justify-start justify-center'><a className='text-[#E2E8F0] font-normal text-base leading-[22.4px]' href="#">Browse</a></li>
              <li className='py-3 gap-2 flex md:justify-start justify-center'><a className='text-[#E2E8F0] font-normal text-base leading-[22.4px]' href="#">Accessibility</a></li>
              <li className='py-3 gap-2 flex md:justify-start justify-center'><a className='text-[#E2E8F0] font-normal text-base leading-[22.4px]' href="#">Five</a></li>
            </ul>

            <ul className="flex flex-col text-nowrap w-[284px]">
              <li className='py-3 gap-2 flex font-medium text-base leading-[17.6px] text-white md:justify-start justify-center'>Solutions</li>
              <li className='py-3 gap-2 flex md:justify-start justify-center'><a className='text-[#E2E8F0] font-normal text-base leading-[22.4px]' href="#">Brainstorming</a></li>
              <li className='py-3 gap-2 flex md:justify-start justify-center'><a className='text-[#E2E8F0] font-normal text-base leading-[22.4px]' href="#">Ideation</a></li>
              <li className='py-3 gap-2 flex md:justify-start justify-center'><a className='text-[#E2E8F0] font-normal text-base leading-[22.4px]' href="#">Wireframing</a></li>
              <li className='py-3 gap-2 flex md:justify-start justify-center'><a className='text-[#E2E8F0] font-normal text-base leading-[22.4px]' href="#">Research</a></li>
              <li className='py-3 gap-2 flex md:justify-start justify-center'><a className='text-[#E2E8F0] font-normal text-base leading-[22.4px]' href="#">Design</a></li>
            </ul>

            <ul className="flex flex-col text-nowrap w-[284px]">
              <li className='py-3 gap-2 flex font-medium text-base leading-[17.6px] text-white md:justify-start justify-center'>Support</li>
              <li className='py-3 gap-2 flex md:justify-start justify-center'><a className='text-[#E2E8F0] font-normal text-base leading-[22.4px]' href="#">Contact Us</a></li>
              <li className='py-3 gap-2 flex md:justify-start justify-center'><a className='text-[#E2E8F0] font-normal text-base leading-[22.4px]' href="#">Developers</a></li>
              <li className='py-3 gap-2 flex md:justify-start justify-center'><a className='text-[#E2E8F0] font-normal text-base leading-[22.4px]' href="#">Documentation</a></li>
              <li className='py-3 gap-2 flex md:justify-start justify-center'><a className='text-[#E2E8F0] font-normal text-base leading-[22.4px]' href="#">Integrations</a></li>
              <li className='py-3 gap-2 flex md:justify-start justify-center'><a className='text-[#E2E8F0] font-normal text-base leading-[22.4px]' href="#">Reports</a></li>
            </ul>

            <ul className="flex flex-col text-nowrap gap-2 w-[284px]">
                <li className='py-3 gap-2 flex font-medium text-base leading-[17.6px] text-white md:justify-start justify-center'>Get the App</li>

                <button className='flex gap-[10px] h-[46px] md:justify-start justify-center'>
                    <img src="/button/appStore.png" className='bg-contain h-10' height="40px" alt="" />
                </button>
              
                <button className='flex gap-[10px] h-[46px] md:justify-start justify-center'>
                    <img src="/button/playStore.png" className='bg-contain h-10' height="40px" alt="" />
                </button>
              
                <li className='pt-12 pb-3 gap-2 flex w-full font-medium leading-[17.6px] text-base text-[#E2E8F0] md:justify-start justify-center'>Follow Us</li>
                <div className="flex flex-row gap-4 w-full md:justify-normal justify-center">
                    <li className=''>
                        <a href="">
                            <i>
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M17.812 5.01699H6.145C3.855 5.01699 2 6.85199 2 9.11599V14.884C2 17.148 3.856 18.984 6.145 18.984H17.812C20.102 18.984 21.957 17.148 21.957 14.884V9.11599C21.957 6.85199 20.101 5.01599 17.812 5.01599V5.01699ZM15.009 12.28L9.552 14.855C9.51872 14.871 9.48192 14.8784 9.44503 14.8763C9.40815 14.8743 9.37237 14.863 9.34103 14.8434C9.3097 14.8239 9.28382 14.7967 9.2658 14.7645C9.24779 14.7322 9.23822 14.6959 9.238 14.659V9.34999C9.23867 9.31286 9.24872 9.27651 9.26722 9.24432C9.28573 9.21212 9.31208 9.18513 9.34382 9.16587C9.37556 9.1466 9.41167 9.13568 9.44877 9.13413C9.48587 9.13258 9.52276 9.14044 9.556 9.15699L15.014 11.892C15.0504 11.9101 15.0809 11.9381 15.102 11.9728C15.1232 12.0075 15.1341 12.0474 15.1336 12.0881C15.1331 12.1287 15.1211 12.1683 15.0991 12.2025C15.077 12.2366 15.0458 12.2638 15.009 12.281V12.28Z" fill="#E2E8F0"/>
                                </svg>
                            </i>
                        </a>
                    </li>

                    <li className=''>
                        <a href="">
                            <i>
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M9.046 5.865V8.613H7.032V11.973H9.046V21.959H13.18V11.974H15.955C15.955 11.974 16.215 10.363 16.341 8.601H13.197V6.303C13.197 5.96 13.647 5.498 14.093 5.498H16.347V2H13.283C8.943 2 9.046 5.363 9.046 5.865Z" fill="#E2E8F0"/>
                                </svg>

                            </i>
                        </a>
                    </li>

                    <li className=''>
                        <a href="">
                            <i>
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M22 5.90701C21.2504 6.23439 20.4565 6.44905 19.644 6.54401C20.4968 6.04324 21.138 5.24912 21.448 4.31001C20.64 4.78034 19.7587 5.11161 18.841 5.29001C18.4545 4.88522 17.9897 4.5634 17.4748 4.34419C16.9598 4.12498 16.4056 4.01298 15.846 4.01501C13.58 4.01501 11.743 5.82501 11.743 8.05501C11.743 8.37101 11.779 8.68001 11.849 8.97501C10.2236 8.89771 8.63212 8.48242 7.17617 7.75565C5.72022 7.02888 4.43176 6.00659 3.393 4.75401C3.02883 5.36841 2.83742 6.06979 2.839 6.78401C2.8397 7.45198 3.00683 8.10924 3.32529 8.6964C3.64375 9.28357 4.1035 9.78212 4.663 10.147C4.01248 10.126 3.37602 9.95234 2.805 9.64001V9.69001C2.805 11.648 4.22 13.281 6.095 13.653C5.74261 13.7465 5.37958 13.7939 5.015 13.794C4.75 13.794 4.493 13.769 4.242 13.719C4.51008 14.5269 5.02311 15.2313 5.70982 15.7344C6.39653 16.2374 7.22284 16.5141 8.074 16.526C6.61407 17.6506 4.82182 18.2581 2.979 18.253C2.647 18.253 2.321 18.233 2 18.197C3.88125 19.3877 6.06259 20.0183 8.289 20.015C15.836 20.015 19.962 13.858 19.962 8.51901L19.948 7.99601C20.7529 7.42968 21.4481 6.72186 22 5.90701Z" fill="#E2E8F0"/>
                                </svg>
                            </i>
                        </a>
                    </li>

                    <li className=''>
                        <a href="">
                            <i>
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M16.017 2H7.947C6.37015 2.00185 4.85844 2.62914 3.74353 3.74424C2.62862 4.85933 2.00159 6.37115 2 7.948L2 16.018C2.00185 17.5948 2.62914 19.1066 3.74424 20.2215C4.85933 21.3364 6.37115 21.9634 7.948 21.965H16.018C17.5948 21.9631 19.1066 21.3359 20.2215 20.2208C21.3364 19.1057 21.9634 17.5938 21.965 16.017V7.947C21.9631 6.37015 21.3359 4.85844 20.2208 3.74353C19.1057 2.62862 17.5938 2.00159 16.017 2V2ZM19.957 16.017C19.957 16.5344 19.8551 17.0468 19.6571 17.5248C19.4591 18.0028 19.1689 18.4371 18.803 18.803C18.4371 19.1689 18.0028 19.4591 17.5248 19.6571C17.0468 19.8551 16.5344 19.957 16.017 19.957H7.947C6.90222 19.9567 5.90032 19.5415 5.16165 18.8026C4.42297 18.0638 4.008 17.0618 4.008 16.017V7.947C4.00827 6.90222 4.42349 5.90032 5.16235 5.16165C5.90122 4.42297 6.90322 4.008 7.948 4.008H16.018C17.0628 4.00827 18.0647 4.42349 18.8034 5.16235C19.542 5.90122 19.957 6.90322 19.957 7.948V16.018V16.017Z" fill="#E2E8F0"/>
                                    <path d="M11.982 6.819C10.6134 6.82112 9.30154 7.36579 8.33391 8.33361C7.36627 9.30143 6.82186 10.6134 6.82001 11.982C6.82159 13.3509 7.36603 14.6633 8.33391 15.6314C9.30179 16.5995 10.6141 17.1441 11.983 17.146C13.3521 17.1444 14.6647 16.5998 15.6328 15.6317C16.6008 14.6637 17.1454 13.3511 17.147 11.982C17.1449 10.6131 16.5999 9.30088 15.6317 8.33319C14.6634 7.3655 13.3509 6.82132 11.982 6.82V6.819ZM11.982 15.138C11.1452 15.138 10.3428 14.8056 9.75109 14.2139C9.15941 13.6222 8.82701 12.8198 8.82701 11.983C8.82701 11.1462 9.15941 10.3438 9.75109 9.75208C10.3428 9.1604 11.1452 8.828 11.982 8.828C12.8188 8.828 13.6213 9.1604 14.2129 9.75208C14.8046 10.3438 15.137 11.1462 15.137 11.983C15.137 12.8198 14.8046 13.6222 14.2129 14.2139C13.6213 14.8056 12.8188 15.138 11.982 15.138Z" fill="#E2E8F0"/>
                                    <path d="M17.156 8.095C17.8392 8.095 18.393 7.54118 18.393 6.858C18.393 6.17483 17.8392 5.621 17.156 5.621C16.4728 5.621 15.919 6.17483 15.919 6.858C15.919 7.54118 16.4728 8.095 17.156 8.095Z" fill="#E2E8F0"/>
                                </svg>
                            </i>
                        </a>
                    </li>

                    <li className=''>
                        <a href="">
                            <i>
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M21.959 13.719V21.098H17.681V14.213C17.681 12.483 17.062 11.303 15.514 11.303C14.332 11.303 13.628 12.099 13.319 12.868C13.206 13.143 13.177 13.526 13.177 13.911V21.098H8.897C8.897 21.098 8.955 9.438 8.897 8.229H13.177V10.053L13.149 10.095H13.177V10.053C13.745 9.178 14.76 7.927 17.033 7.927C19.848 7.927 21.959 9.767 21.959 13.719ZM4.421 2.026C2.958 2.026 2 2.986 2 4.249C2 5.484 2.93 6.473 4.365 6.473H4.393C5.886 6.473 6.813 5.484 6.813 4.249C6.787 2.986 5.887 2.026 4.422 2.026H4.421ZM2.254 21.098H6.532V8.229H2.254V21.098Z" fill="#E2E8F0"/>
                                </svg>

                            </i>
                        </a>
                    </li>
                </div>           
            
            </ul>
        </div>
        <div className="md:py-6 py-12 md:gap-12 gap-6 flex md:flex-row flex-col mx-auto items-center">
            <span className='text-[#E2E8F0] font-normal text-base leading-[22.4px] md:w-[930px]'>Collers @ 2023. All rights reserved.</span>
            <ul className='flex flex-row items-center gap-8'>
                <li className='py-3 gap-2 flex'><a className='font-normal text-base text-[#E2E8F0] leading-[22.4px]' href="#">Terms</a></li>
                <li className='py-3 gap-2 flex'><a className='font-normal text-base text-[#E2E8F0] leading-[22.4px]' href="#">Privacy</a></li>
                <li className='py-3 gap-2 flex'><a className='font-normal text-base text-[#E2E8F0] leading-[22.4px]' href="#">Contact</a></li>
                <li className='py-3 gap-2 flex'>
                    <a className='font-normal text-base text-[#E2E8F0] leading-[22.4px] flex flex-row justify-center items-center gap-2' href="#">
                        <i>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M4.252 10C4.08416 10.6534 3.99949 11.3254 4 12C4 12.69 4.088 13.36 4.252 14H7.1C6.96518 12.6701 6.96518 11.3299 7.1 10H4.252ZM5.07 8H7.416C7.682 6.783 8.066 5.693 8.537 4.786C7.08518 5.48542 5.87722 6.60523 5.07 8ZM19.748 10H16.9C17.0348 11.3299 17.0348 12.6701 16.9 14H19.748C20.0847 12.6879 20.0847 11.3121 19.748 10ZM18.93 8C18.1228 6.60523 16.9148 5.48542 15.463 4.786C15.935 5.693 16.318 6.783 16.584 8H18.93ZM9.112 10C9.03708 10.664 8.99968 11.3318 9 12C9 12.685 9.038 13.355 9.112 14H14.888C15.0386 12.6709 15.0386 11.3291 14.888 10H9.112ZM9.47 8H14.53C14.348 7.2483 14.0855 6.51841 13.747 5.823C13.119 4.568 12.447 4 12 4C11.552 4 10.881 4.568 10.253 5.823C9.938 6.455 9.673 7.19 9.47 8ZM5.07 16C5.87722 17.3948 7.08518 18.5146 8.537 19.214C8.065 18.307 7.682 17.217 7.416 16H5.07ZM18.93 16H16.584C16.318 17.217 15.934 18.307 15.463 19.214C16.9148 18.5146 18.1228 17.3948 18.93 16ZM9.47 16C9.673 16.81 9.938 17.545 10.253 18.177C10.881 19.432 11.553 20 12 20C12.448 20 13.119 19.432 13.747 18.177C14.062 17.545 14.327 16.81 14.53 16H9.47ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z" fill="#E2E8F0"/>
                            </svg>
                        </i>
                        EN
                    </a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default index