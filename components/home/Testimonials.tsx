import { testimonies } from '@/utils/data'
import React from 'react'
import Image from 'next/image'

export const Testimonials = () => {
  
  return (
    <div>
      <div className="py-20 bg-primary/50">
        <div className=" max-w-6xl mx-auto">
          <div className=" flex flex-col items-center">
            <h2 className=' text-3xl my-10 text-[#ffdccb] font-semibold tracking-wide font-rale'>What our client saying about Us</h2>
            <div className=" grid grid-cols-3 py-6 w-full gap-6">
              {
                testimonies.map((testimo) => {
                  return (
                    <div className=" py-4 px-4 border even:scale-105 border-secondary rounded-2xl text-[#fff1ea] flex flex-col">
                      <div className=" py-4 mb-4 flex space-x-4 items-center border-b border-secondary">
                        <Image alt='' src={testimo.img} className=' h-12 w-12 border-2 border-primary rounded-full object-cover ' />
                        <span className=' font-popping'>
                          { testimo.name }
                        </span>
                      </div>
                      <p className=' font-rale text-sm'>
                        { testimo.message }
                      </p>
                    </div>
                  )
                })
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  
  )
}
