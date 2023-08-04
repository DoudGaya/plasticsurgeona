import React from 'react'
import logo from '@/public/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
      <div className=' bg-primary text-tert py-20'>
          <div className=" max-w-5xl grid grid-cols-3 mx-auto">
              <div className=" border-r border-tert/50 py-10">
                <div className=" flex flex-col space-y-4">
                      <div className=" h-16 w-full ">
                          <Image src={logo} className=' w-full h-full object-contain object-left flex-none' alt='Plastic Surgeona' />
                      </div>
                      <p className=' font-rale'> 
                          PlasticSurgeonA offers world-class plastic
                          surgery services in Turkey. Our expert plastic
                          surgeons provide a wide range of cosmetic procedures.
                          Contact us for a consultation
                      </p>
                      
                      <div className=" flex ">
                           <Link href='tel:+905411794062' className=' bg-secondary text-primary border-primary py-3 flex space-x-3 px-6 border-2 rounded-full ' type='tel'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                            </svg>
                            <span className=' font-popping tracking-wide'>+905411794062</span>
                        </Link>
                     </div>
                </div>
              </div>
              <div className=" border-r border-tert/50 py-20">
                  <div className=" flex items-center flex-col">
                      <h3 className=' text-2xl font-rale pb-3 border-b border-secondary'> Useful Links</h3>
                      <ul className=' text-center py-3 space-y-2 font-rale'>
                        <li>
                            <Link href={'/'} className=" hover:underline hover:text-tert hover:font-semibold">Home</Link>
                        </li>
                        <li>
                            <Link href={'/about'} className=" hover:underline hover:text-tert hover:font-semibold">About</Link>
                        </li>
                        <li>
                            <Link href={'/consultation'} className=" hover:underline hover:text-tert hover:font-semibold">Consultation</Link>
                        </li>
                        <li>
                            <Link href={'/services'} className=" hover:underline hover:text-tert hover:font-semibold">Services</Link>
                        </li>
                      </ul>
                    </div>
              </div>
              <div className=" py-20">

              </div>
          </div>
          
    </div>
  )
}
