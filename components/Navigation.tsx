import Link from 'next/link'
import logo from '@/public/logo.png'
import Image from 'next/image'

import React from 'react'

export const Navigation = () => {
  return (
    <div className=" w-full fixed top-0 left-0 bg-[rgb(255,224,209)] justify-center text-stone-700 shadow-lg py-3 h-auto  flex ">
    <div className=" flex justify-between  max-w-[1200px] w-full ">
        <div className="  w-max">
           <Link href={'/'} className="">
          <div className='  flex h-16 float-right' >
            <Image src={logo} className='object-contain' alt='Plastic Surgeona' />
         </div>
       </Link>
      </div>
        

        <div className=" flex space-x-6">
           <ul className=' flex h-full items-center  space-x-6'>
            <li>
              <Link className='h-full font-poppins flex hover:underline' href={''}>Home</Link>
            </li>
            <li>
              <Link className='h-full font-poppins flex hover:underline' href={''}>Gallery</Link>
            </li>
            <li>
              <Link className='h-full font-poppins flex hover:underline' href={''}>Articles</Link>
            </li>
          </ul>
          
           <ul className=' flex space-x-4 items-center'>
            <li>
              <button className=" flex-none flex   w-full border-[rgb(94,45,21)] py-2 px-4 border-2 rounded-full">Free Consultation</button>
            </li>
            <li>
               <Link href='tel:+905411794062' className=' bg-[rgb(94,45,21)] text-white py-3 flex space-x-3 px-6 w-full border-2 rounded-full ' type='tel'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
              </svg>
                <span className=' font-popping tracking-wide'>+905411794062</span>
              </Link>
            </li>
          </ul>
        </div>
     </div>
    </div>
  )
}
