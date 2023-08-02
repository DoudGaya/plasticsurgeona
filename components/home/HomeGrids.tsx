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
        name: 'Message',
        icon: svg1
    },
     {
        id: 2,
        name: 'Message',
        icon: svg2
    },
      {
        id: 3,
        name: 'Message',
        icon: svg3
    },
     {
        id: 4,
        name: 'Message',
        icon: svg4
    },
     {
        id: 5,
        name: 'Message',
        icon: svg5
    },
     {
        id: 6,
        name: 'Message',
        icon: svg6
    },
     {
        id: 7,
        name: 'Message',
        icon: svg7
    },
     {
        id: 8,
        name: 'Message',
        icon: svg8
    },
     {
        id: 9,
        name: 'Message',
        icon: svg9
    },
     {
        id: 10,
        name: 'Message',
        icon: svg10
    },
     {
        id: 11,
        name: 'Message',
        icon: svg11
    },
     {
        id: 12,
        name: 'Message',
        icon: svg12
    },
]

export const HomeGrids = () => {
  return (
    <div className=' grid mx-auto gap-6 my-10 grid-cols-6'>
          {
              svgs.map((tar) => {
                  return (
                      <div className=" py-6 rounded-lg  px-6 border border-primary">
                          <Image src={tar.icon} className=' h-[50px] w-[50px] rounded-lg' alt={'Image'} />
                      </div>
                  )
              })
          }
    </div>
  )
}