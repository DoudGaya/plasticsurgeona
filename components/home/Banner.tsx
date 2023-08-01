import React from 'react'
import Image from 'next/image'
import beauty from '@/public/assets/super_beauty.jpg'
import Link from 'next/link'

export const Banner = () => {
  return (
    <div className=' h-[70vh] w-full  flex'>
       <div className=" flex flex-col max-w-[1100px]  mx-auto w-full lg:flex-row">
        <div className=" w-4/6  flex flex-col justify-center">
           <h1 className=' text-5xl font-banner font-bold'>From the touch of Experts</h1>
           <p className=' text-3xl font-rale '>Get yourself a perfect body</p>
           <div className=" my-6">
            <form className=' flex flex-col space-y-6 bg-primary p-6 rounded-xl w-2/4'>
             <label htmlFor="" className=''>
                <p className='font-rale'>Name: </p>
                <input type="text" className=' w-full py-2 rounded-lg' />
              </label>
              <label htmlFor="" className=''>
                <p className='font-rale'>Name: </p>
                <input type="text" className=' w-full py-2 rounded-lg' />
              </label>
              <label htmlFor="" className=''>
                <p className='font-rale'>Name: </p>
                <input type="text" className=' w-full py-2 rounded-lg' />
              </label>
            <Link href={'/somewhere'} className=' text-white rounded-lg text-xl px-6 py-2 bg-secondary'>Get Free Consultation</Link>
            </form>
           </div>
        </div>
          <div className="w-2/6 py-20 ">
              <Image src={beauty} className=' w-full h-full border-[6px] border-primary rounded-full object-cover object-center' alt='Plastic Surgery beauty face' />
          </div>
       </div>
    </div>
  )
}
