import React from 'react'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { GiHomeGarage } from 'react-icons/gi'
import {LiaHandsHelpingSolid} from 'react-icons/lia'
import Link from 'next/link'


const cards = [
    {
        id: 1, 
        title: 'Special Healthcare Assistant',
        message: 'A medical consultant will assist you before, during and after the surgery to make sure you have all the support you could need and answers all your questions.',
        svg: <LiaHandsHelpingSolid className=' h-8 stroke-primary fill-primary w-8 flex-none' />
    },

    {
        id: 1, 
        title: 'Accommodation and Transfer',
        message: 'We will arrangement to your accommodation and transportation within the city prior to your arrival by our skillful logistics team.',
        svg: <GiHomeGarage className=' h-8 stroke-primary fill-primary w-8 flex-none' /> 
    },
    {
        id: 1, 
        title: 'Yes, You can count on us',
        message: 'We will make sure we meet and surpasses your expectations. You are our priority, so we will ensure you have the best experience with us. ',
        svg: <MdOutlineHealthAndSafety className=' h-8 stroke-primary fill-primary w-8 flex-none' />
    },
]


export const WhatWeOffer = () => {
  return (
      <div className=' max-w-6xl mx-auto -mt-10 flex shadow-2xl shadow-secondary/60 border-b border-primary/40 flex-col rounded-3xl bg-[#ffecd1]'>
          <div className=" flex justify-center pt-20">
            <h2 className=' text-2xl font-rale'>What we Offer</h2>
          </div>
          <div className=" gap-x-6 grid-cols-3 px-10 py-6 grid mx-auto ">
            {
                  cards.map((card) => {
                      return (
                        <div className=" flex flex-col">
                              <div className=" flex space-x-4 items-center">
                                <span className='p-2 flex justify-center items-center bg-secondary my-4 rounded-full'>
                                    { card.svg }      
                                  </span>
                                  <span className=' font-popping'> { card.title }</span>
                              </div> 
                              <div className="">
                                  <p className='text-sm font-rale'> { card.message } </p>
                              </div>
                        </div>
                    )
                } )    
            } 
          </div>
          <div className=" flex justify-center mb-10">
                <Link href={'/consultations'} className=" text-white text-xl font-rale bg-primary py-2 px-6 border-2 border-secondary rounded-full">
                    Book Free Consultation 
                </Link>
          </div>
    </div>
  )
}
