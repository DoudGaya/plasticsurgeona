import Image from "next/image"
import Image1 from '@/public/assets/slider1.jpg'
import face from '@/public/assets/plastics/face2.png'
import hips from '@/public/assets/hips.jpg'

import tummy from '@/public/assets/plastics/tummy.png'
import Link from "next/link"
export const About = () => {
  return (
    <div className=" mt-20 bg-cover z-0 bg-fixed bg-blend-overlay bg-stone-700 backdrop-blur-lg" style={{ backgroundImage: `url(${hips.src})` }}>
          <div className=" grid grid-cols-1 lg:grid-cols-2 max-w-5xl lg:space-x-10 mx-auto">
              <div className=" grid overflow-hidden gap-5 py-10 px-10 lg:px-0 grid-cols-1 lg:grid-cols-2">
                  <div className=" lg:col-span-2 overflow-hidden">
                      <Image src={Image1} className=" h-[200px] w-full rounded-2xl object-cover" alt="Plastic Surgeona Surgery" />
                  </div>
                  <div className=" overflow-hidden w-full">
                         <Image src={face} className=" h-[200px] w-full rounded-2xl object-cover" alt="Plastic Surgeona Surgery" />
                  </div>
                  <div className=" overflow-hidden">
                        <Image src={tummy} className=" h-[200px] w-full rounded-2xl object-cover" alt="Plastic Surgeona Surgery" />
                  </div>
              </div>
              <div className=" flex flex-col space-y-8 lg:px-6  py-20 lg:py-0 px-10 bg-secondary/40 text-white items-center justify-center">
                  <h3 className=" border-b py-3 font-popping text-2xl  font-semibold">Transform Your Beauty with Global Excellence</h3>
                  <p className=" text-justify font-popping">
                      Welcome to PlasticSurgeonA, the epitome of excellence
                      in the world of plastic surgery. With an unwavering commitment to
                      achieving beauty and perfection, we invite you to embark on a transformative
                      journey that will redefine your confidence and radiate your inner beauty.
                  </p>
                  <div className="">
                    <Link href={'/consultations'} className=" text-xl font-rale bg-primary py-2 px-6 border-2 border-secondary rounded-full">
                        Book Free Consultation 
                    </Link>
                 </div>
              </div>
          </div> 
    </div>
  )
}
