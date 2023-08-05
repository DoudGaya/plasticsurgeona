import bannerIMG from '@/public/assets/femaleBanner.jpg'

export const Banner = () => {
  return (
    <div className='  bg-blend-overlay bg-stone-700 bg-right h-full lg:h-screen py-[100px] bg-no-repeat bg-cover lg:bg-center' style={{ backgroundImage: `url(${bannerIMG.src})` }}> 
      <div className=" py-10 max-w-3xl px-10 lg:px-0 text-center mx-auto items-center justify-center">
        <h3 className=' font-popping text-2xl  text-white lg:text-4xl'>
        Say Goodbye To Stubborn Fat
          and Saggy Belly Skin With 
          Tummy Tuck Surgery
        </h3>
      </div>  
      <div className=" max-w-5xl mx-auto grid align-middle justify-items-center justify-center grid-cols-1 lg:grid-cols-2">
        <div className="py-10 mx-auto">
          <div className="  px-10 bg-[rgb(239,180,178)]/70 py-12">
            <p className=' font-rale text-center mb-4 text-2xl text-primary'>Get free Consultation.</p>
            <form className=' flex flex-col my-20 lg:my-0 space-y-4 '>
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
              <button className='bg-[rgb(94,45,21)] py-2 text-tert font-popping'>Book for Free</button>
            </form>
          </div>
        </div>
        <div className="">
         
        </div>
      </div>
    </div>
  )
}
