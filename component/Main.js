import Image from 'next/image'
import React from 'react'

const Main = () => {
    return (
        <div className=''>
            <div className=' md:flex  md:items-center max-w-6xl p-4 m-auto h-[500px] '>
                <div className='md:w-[595px] md:h-[500px] md:p-3  md:m-auto '>
                    <h1 className=' font-bold	text-6xl md:font-extrabold	md:text-6xl 	md:leading-[70px]'>YOUR FEET DESERVE THE BEST</h1>
                    <p className='md:font-semibold md:text-base text-sm'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className='md:mt-5 mt-2'>
                        <button className='bg-red-500 p-2 mr-10'>Shop Now</button>
                        <button className='p-2' >Category</button>

                    </div>
                    <div className='md:mt-10 mt-5'>
                        <p>Also Available On</p>
                        <span className='flex items-center mt-5'>
                            <img className='w-8 mr-5' src='assets/flipKart.png' />
                            <img className='w-8' src='assets/amazon.png' />

                        </span>
                    </div>
                </div>
                <div className=' ' >
                    <Image className='md:w-[530px] md:h-[488px]' src='/assets/shoe_image.png' height={500} width={500} alt='shoe' />
                </div>
            </div>
        </div>

    )
}

export default Main