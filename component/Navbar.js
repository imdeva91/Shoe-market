import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-around w-full mt-2 md:h-[72px]'>
            <div>
                <Image src='/assets/brand_logo.png' alt='Logo' height={100} width={100} />
            </div>
            <div className='space-x-5 hidden md:block'>
                <Link href={"/"}>MENU</Link>
                <Link href={"/"}>LOCATION</Link>
                <Link href={"/"}>ABOUT</Link>
                <Link href={"/"}>CONTACT</Link>

            </div>
            <button className='bg-red-500 w-[75px] h-8 text-white hidden md:block'>Login</button>
            <h1 className='md:hidden text-4xl'>☰</h1>
        </div>
    )
}

export default Navbar