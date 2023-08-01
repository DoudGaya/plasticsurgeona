import Link from 'next/link'

import React from 'react'

export const Navigation = () => {
  return (
    <div className=" w-full bg-secondary shadow-lg text-white py-3 h-auto  flex ">
    <div className=" flex max-w-[1200px] w-full mx-auto justify-between ">
       <div className="">
         LOGO
       </div>
    
       <div className=" flex h-full">
         <ul className=' flex h-full space-x-6'>
           <li>
             <Link className='h-full flex hover:underline' href={''}>HOME</Link>
           </li>
           <li>
             <Link className='h-full flex hover:underline' href={''}>SERVICES</Link>
           </li>
           <li>
             <Link className='h-full flex hover:underline' href={''}>BLOGS</Link>
           </li>
           <li>
             <Link className='h-full flex hover:underline' href={''}>ABOUT US</Link>
           </li>
         </ul>
       </div>
     </div>
    </div>
  )
}
