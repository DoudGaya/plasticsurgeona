import React from 'react'
import Link from 'next/link'
import { LiaFacebookSquare } from 'react-icons/lia'
import { LiaTwitter } from 'react-icons/lia'
import { LiaInstagram } from 'react-icons/lia'
import {LiaLinkedinIn} from 'react-icons/lia'

const socials = [
    {
        id: 1,
        icon: ( <LiaFacebookSquare className=' h-7 w-7' /> ),
        link:'https://www.facebook.com/plasticsurgeona'
    },
    {
        id: 2,
        icon: ( <LiaInstagram className=' h-7 w-7' />),
        link:'https://www.twitter.com//plasticsurgeona'
    },
    {
        id: 3,
        icon: ( <LiaTwitter className=' h-7 w-7' />),
        link:'https://www.facebook.com/'
    },
    {
        id: 4,
        icon: <LiaLinkedinIn className=' h-7 w-7' />,
        link:'https://www.facebook.com/'
    },

]

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
            {
                      socials.map((social) => {
                          return (
                        <Link key={social.id} href={social.link} className=' p-1 bg-primary/90 hover:bg-primary/70 rounded-xl' >
                           <span>{social.icon}</span>
                        </Link>
                    )
                })          
            }
          </div>
          
    </div>
      </div>
  )
}
