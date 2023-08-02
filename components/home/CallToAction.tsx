import React from 'react'
import Link from 'next/link'

export const CallToAction = () => {
  return (
      <div className="  max-w-4xl mx-auto flex items-center w-full">
          <div className=' flex bg-secondary px-4 py-3 items-center w-full justify-between'>
          <div className=" flex items-center">
                  <p className=' items-center font-popping text-2xl text-primary  text-center'>
                   Follow Us on Social Media
                 </p>
          </div>
          <div className=" grid grid-cols-4 gap-x-6 text-white">
              <Link href={'/gallery'} className=' px-3 py-3 bg-primary  ' >
                a
              </Link>
              <Link href={'/gallery'} className=' px-3 py-3 bg-primary  ' >
                a
              </Link>
              <Link href={'/gallery'} className=' px-3 py-3 bg-primary  ' >
                a
              </Link>
              <Link href={'/gallery'} className=' px-3 py-3 bg-primary  ' >
                a
              </Link>
          </div>
          
    </div>
      </div>
  )
}
