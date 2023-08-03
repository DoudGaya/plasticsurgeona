import React from 'react'
import Link from 'next/link'

export const Gallery = () => {
  return (
    <div className=' bg-tert w-full py-20'>
        <div className=' grid grid-cols-3 mx-auto justify-center max-w-6xl'>
        <div className=" flex flex-col gap-y-5">
          <div className=" py-3 border-b border-primary">
            <h3 className=' font-rale font-semibold text-xl'>Your Trusted Destination for World-Class Aesthetic Procedures</h3>
          </div>
              <p className=' font-rale text-justify'> 
                At PlasticSurgeonA, we take pride in being a global
                leader in plastic surgery, located in the heart of Turkey.
                With a team of highly skilled and internationally acclaimed
                surgeons, our state-of-the-art medical facility boasts the
                latest advancements in technology, ensuring precision,
                safety, and unparalleled results.
          </p>  
            <Link href={'/about-us'} className=' text-xl rounded-full bg-primary py-2 justify-center text-white text-center '>Learn More</Link>
          </div>
        </div>
    </div>
  )
}
