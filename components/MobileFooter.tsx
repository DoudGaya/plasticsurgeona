import React from 'react'
import Link from 'next/link'


export const MobileFooter = () => {
  return (
        <div className=' w-full justify-end flex lg:hidden px-8 py-4 bg-secondary z-40 shadow-lg fixed bottom-0 left-0'>
          <Link href={'/'} className=' font-rale text-tert border-2 bg-primary border-tert py-2 rounded-full text-xl px-4 '>
                Free Consultation
          </Link>   
        </div>
  )
}
