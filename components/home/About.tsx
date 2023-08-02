import Image from "next/image"
import Image1 from '@/public/assets/slider1.jpg'
import face from '@/public/assets/plastics/face2.png'
import tummy from '@/public/assets/plastics/tummy.png'
export const About = () => {
  return (
    <div>
          <div className=" grid grid-cols-2 max-w-4xl space-x-10 mx-auto">
              <div className=" grid  h-[400px] overflow-hidden gap-5 py-10 grid-cols-2">
                  <div className=" col-span-2 overflow-hidden">
                      <Image src={Image1} className=" h-[300px] rounded-2xl object-cover" alt="Plastic Surgeona Surgery" />
                  </div>
                  <div className=" overflow-hidden">
                        <Image src={face} className=" h-[300px] rounded-2xl object-cover" alt="Plastic Surgeona Surgery" />
                  </div>
                  <div className=" overflow-hidden">
                        <Image src={tummy} className=" h-[300px] rounded-2xl object-cover" alt="Plastic Surgeona Surgery" />
                  </div>
              </div>
              <div className=" flex flex-col space-y-8 bg-yellow-50 my-auto">
                  <h3>Transform Your Beauty with Global Excellence</h3>
                  <p>
                      Welcome to PlasticSurgeonA, the epitome of excellence
                      in the world of plastic surgery. With an unwavering commitment to
                      achieving beauty and perfection, we invite you to embark on a transformative
                      journey that will redefine your confidence and radiate your inner beauty.
                  </p>
              </div>
          </div> 
    </div>
  )
}
