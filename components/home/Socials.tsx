import { socials } from "@/utils/data"
import Link from "next/link"

export const CallToAction = () => {
  return (
      <div className="  max-w-4xl mx-auto flex items-center w-full">
          <div className=' flex bg-secondary px-4 py-3 rounded-lg items-center w-full justify-between'>
          <div className=" flex items-center">
                  <p className=' items-center font-popping text-2xl text-primary  text-center'>
                   Follow Us on Social Media
                 </p>
          </div>
          <div className=" grid grid-cols-4 gap-x-6 text-white">
            {
                socials.map((social) => {
                    return (
                            <Link key={social.id} href={social.link} className='' >
                                <span className='p-2 flex justify-center items-center border border-primary bg-secondary my-4 rounded-full'>
                                        { social.icon }      
                                  </span>
                            </Link>
                            )
                })          
            }
          </div>
          
    </div>
      </div>
  )
}
