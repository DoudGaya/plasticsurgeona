import React from 'react'
import svg1 from '@/public/assets/icons/svg1.svg'
import svg2 from '@/public/assets/icons/svg2.svg'
import svg3 from '@/public/assets/icons/svg3.svg'
import svg4 from '@/public/assets/icons/svg4.svg'
import svg5 from '@/public/assets/icons/svg5.svg'
import svg6 from '@/public/assets/icons/svg6.svg'
import svg7 from '@/public/assets/icons/svg7.svg'
import svg8 from '@/public/assets/icons/svg8.svg'
import svg9 from '@/public/assets/icons/svg9.svg'
import svg10 from '@/public/assets/icons/svg10.svg'
import svg11 from '@/public/assets/icons/svg11.svg'
import svg12 from '@/public/assets/icons/svg12.svg'
import Image from 'next/image'

const svgs = [
    {
        id: 1,
        name: 'Tummy Tuck',
        icon: svg1
    },
     {
        id: 2,
        name: 'Breast Augmentation',
        icon: svg2
    },
    {
        id: 3,
        name: 'Arm Lift (Brachioplasty)',
        icon: svg10
    },
     {
        id: 4,
        name: 'Brazilian Butt Lift',
        icon: svg4
    },
     {
        id: 5,
        name: 'Blepharoplasty',
        icon: svg5
    },
     {
        id: 6,
        name: 'Eyebrow Extensions',
        icon: svg6
    },
     {
        id: 7,
        name: 'Liposuction',
        icon: svg7
    },
     {
        id: 8,
        name: 'Lip Augmentation',
        icon: svg8
    },
     {
        id: 9,
        name: 'Facelift (Rhytidectomy)',
        icon: svg9
    },

     {
        id: 10,
        name: 'Breast Reduction',
        icon: svg12
    },
]

export const HomeGrids = () => {
  return (
      <div className=" flex flex-col justify-center my-10 mx-auto max-w-4xl">
          <div className=" flex justify-center border-b border-primary py-3 ">
              <h2 className=' font-rale text-2xl'>Some of our Cosmetic Procedures</h2>
          </div>
          
           <div className=' grid mx-auto gap-4 py-6 grid-cols-5'>
          {
              svgs.map((tar) => {
                  return (
                      <div className=" py-6 rounded-lg flex flex-col justify-center items-center px-4 border border-primary">
                          <Image src={tar.icon} className=' h-[70px] border border-primary p-2 w-[70px] rounded-lg' alt={'Image'} />
                          <p className=' text-sm text-center my-4'> { tar.name } </p>
                      </div>
                  )
              })
          }
    </div>
   </div>
  )
}