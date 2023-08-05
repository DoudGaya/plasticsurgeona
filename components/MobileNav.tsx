"use client"
import React, {useContext, useState} from 'react'
import Link from 'next/link'
import logo from '@/public/assets/logo.png'
import Image from 'next/image'
import { useGlobanNavContext } from './context/MobileNavContext'


export const MobileNav = () => {

    const { navSwitcher }: any = useGlobanNavContext()
    
  return (
    <div className=' w-full justify-between flex lg:hidden px-8 py-4 bg-secondary border-b z-40 border-primary shadow-lg sticky left-0 top-0'>
          <Link href={'/'} className=' flex justify-start'>
            <Image alt='Plastic Surgeona' className=' h-12 object-contain object-left' src={logo} />
          </Link>   

          <button onClick={() => {navSwitcher()}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
          </button>
    </div>
  )
}
