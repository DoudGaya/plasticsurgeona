import React from 'react'
import Image from 'next/image'
import { beforeNdAfter } from '@/utils/data'

export const BeforeAndAfter = () => {
  return (
    <div className='py-10 bg-[#6b5d55] justify-center items-center flex flex-col'>
      <div className=" w-full border-b border-secondary py-6 mb-6 flex justify-center">
        <h3 className=' text-3xl text-[#fffaee] font-rale '>Our success story</h3>
      </div>
      <div className=" grid grid-cols-4 gap-6 mx-auto max-w-[1200px]">
        {
          beforeNdAfter.map((el) => {
            return (
              <div className=" flex bg-secondary rounded-2xl  flex-col ">
                <div className="  h-[200px] w-full">
                  <Image src={el.image} className=' w-full h-full object-fill rounded-t-2xl' alt='' />
                </div>
                <div className=" flex justify-center text-[#fffaee] py-6">
                  <p className=' text-xl font-popping'>
                    {el.surgery}
                  </p>
                </div>
             </div>
            )
          })
        }
        
      </div>
    </div>
  )
}
