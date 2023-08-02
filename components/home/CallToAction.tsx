import React from 'react'
import Link from 'next/link'

export const CallToAction = () => {
  return (
      <div className="  max-w-3xl mx-auto">
          <div className=' flex justify-between my-20'>
          <div className=" flex">
            <span>200 <span>+</span> <span>Successful Surgery </span> </span>
          </div>
          <div className=" flex">
              <Link href={'/gallery'} className=' px-6 py-3 bg ' >Check our Before and after</Link>
          </div>
          
    </div>
      </div>
  )
}
