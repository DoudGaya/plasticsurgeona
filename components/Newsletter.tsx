"use client"
import butt from '@/public/assets/butt.jpg'
import { socials } from '@/utils/data'
import Link from 'next/link'


export const Newsletter = () => {
  return (
      <div className=' bg-no-repeat bg-primary/40 bg-blend-multiply bg-cover bg-fixed' style={{ backgroundImage: `url('${butt.src}')` }}>
          <div className=" mx-auto max-w-5xl gap-x-10 grid grid-cols-1 lg:grid-cols-2">
              <div className=" py-10 my-auto bg-secondary px-10">
                  <form className=' space-y-4 w-full flex flex-col '>
                      <label htmlFor="newsletter" className='items-center space-y-4 w-full  flex flex-col' id='newsletter'>
                          <p className=' text-xl font-rale'>Subscribe to our Newsletter</p>
                          <input name='newsletter' placeholder='your@mail.com' className=' focus:outline-none w-full py-2 px-3 bg-[#fdeacf]' type="email" required />
                      </label>
                          <button className='bg-[rgb(94,45,21)] py-2 text-white font-popping'>Subscribe here</button>
                  </form>
              </div>

              <div className="py-20 bg-secondary/30 backdrop-blur-sm">
                  <div className=" px-6 flex flex-col">
                      <div className=" py-4 flex justify-center">
                          <h3 className=' text-3xl text-white font-rale py-6'>Get Free Consultation </h3>
                      </div>
                    <form className=' flex flex-col space-y-4 '>
                        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                            <label htmlFor="email">
                            <p className=' hidden'>First Name</p>
                            <input type="text" placeholder='First Name' required className=' px-4 bg-[#fdeacf] rounded-md w-full outline-none focus:outline-none py-2 ' />
                        </label>
                        <label htmlFor="email">
                            <p className=' hidden'>Last Name</p>
                            <input type="text" placeholder='Last Name' required className=' px-4 bg-[#fdeacf] rounded-md w-full outline-none focus:outline-none py-2 ' />
                        </label>
                          </div>
                            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                            <label htmlFor="email">
                            <p className=' hidden'>Email</p>
                            <input type="email" placeholder='Email Address' required className=' px-4 bg-[#fdeacf] rounded-md w-full outline-none focus:outline-none py-2 ' />
                        </label>
                        <label htmlFor="email">
                            <p className=' hidden'>Phone Number</p>
                            <input type="phone" placeholder='Phone Number' required className=' px-4 bg-[#fdeacf] rounded-md w-full outline-none focus:outline-none py-2 ' />
                        </label>
                        </div>
                        <button className='bg-[rgb(94,45,21)] py-2 text-white font-popping'>Book for Free</button>
                      </form>
                      <div className=" py-10 grid gap-x-4 grid-cols-4">
                          {
                              socials.map((social) => {
                                  return (
                                <Link key={social.id} href={social.link} className=" hover:bg-primary/30 rounded-full">
                                    <span className='p-2 flex justify-center items-center bg-secondary rounded-full'>
                                        { social.icon }      
                                  </span>
                                </Link>
                               )   
                              })
                          }
                      </div>
                  </div>
              </div>
              
          </div>
        
    </div>
  )
}
