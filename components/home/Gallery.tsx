"use client"
import { useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { standing } from '@/utils/data'
import { motion } from 'framer-motion'

export const Gallery = () => {

  const [width, setWidth] = useState(0)
  const slider = useRef()



  useEffect(() => {
    //@ts-ignore
    setWidth(slider?.current?.scrollWidth - slider?.current?.offsetWidth)
  }, [])

  return (
    <div className=' bg-tert container w-full px-10 py-20'>
        <div className=' grid lg:grid-cols-3 gap-y-10 lg:gap-y-0 grid-cols-1 lg:gap-x-10 mx-auto justify-center max-w-6xl'>
        <div className=" flex flex-col gap-y-5">
          <div className=" py-3 border-b border-primary">
            <h3 className=' font-rale font-semibold text-xl'>Trusted Destination for World-Class Aesthetic Procedures</h3>
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
        
        <motion.div
          // @ts-ignore
          ref={slider}
          whileTap={{cursor: "grabbing"}}
          className=" col-span-2 flex overflow-hidden border-r border-primary relative flex-col">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className=" flex flex-row my-auto w-full space-x-6 items-center">
            {
              standing.map((st) => {
                return (
                  <div className=" flex flex-col relative group w-full" key={st.id}>
                    <motion.div
                      className=" h-[300px] flex-none  w-[200px] bg-purple-100 rounded-xl overflow-clip ">
                      <Image src={st.img} alt={st.alt} className='h-full  hover:blur-sm transition-all  hover:cursor-pointer rounded-xl object-cover w-full' />
                      <div className=" bg-stone-800/80 text-2xl cursor-grab font-rale text-white hidden delay-150 transition-colors ease-in-out duration-150 absolute top-0 rounded-xl group-hover:flex items-center justify-center h-full w-full ">
                        {st.alt}
                      </div>
                    </motion.div>
                 </div>
               ) 
              })
           }
          </motion.div>
        </motion.div>
        </div>
    </div>
  )
}
