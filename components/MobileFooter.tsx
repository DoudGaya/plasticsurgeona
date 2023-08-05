import React from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'


export const MobileFooter = () => {
  return (
        <div className=' w-full justify-between items-center  flex lg:hidden px-6 py-4 bg-secondary z-40 shadow-lg fixed bottom-0 left-0'>
          <Link href={'/'} className=' font-rale font-semibold border-2 text-primary border-primary py-2 rounded-full text-lg px-4 '>
                Free Consultation
          </Link>   
            <Link href='https://wa.me/+905411794062' className=' bg-[rgb(94,45,21)] text-white py-3 flex space-x-3 px-3 border-2 rounded-full ' type='tel'>
                  <FaWhatsapp className=' flex-none h-6 w-6' />
              </Link>
        </div>
  )
}
