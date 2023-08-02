import bannerIMG from '@/public/assets/femaleBanner.jpg'

export const Banner = () => {
  return (
    <div className='  bg-blend-overlay  bg-stone-700 py-[100px] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${bannerIMG.src})` }}> 
      <div className=" py-10 max-w-3xl text-center mx-auto items-center justify-center">
        <h3 className=' font-popping  text-white text-4xl'>
        Say Goodbye To Stubborn Fat
          and Saggy Belly Skin With 
          Tummy Tuck Surgery
        </h3>
      </div>  
      <div className=" max-w-5xl mx-auto grid align-middle justify-items-center justify-center grid-cols-2">
        <div className="py-10 mx-auto">
          <div className="  px-10 bg-[rgb(239,180,178)]/70 py-12">
            <p className=' font-rale text-center mb-4 text-2xl'>Get free Consultation.</p>
            <form className=' flex flex-col space-y-4 '>
              <div className="flex space-x-4">
                 <label htmlFor="email">
                <p className=' hidden'>Email</p>
                <input type="text" placeholder='Email' className=' px-4 w-full outline-none focus:outline-none py-2 ' />
              </label>
               <label htmlFor="email">
                <p className=' hidden'>Email</p>
                <input type="text" placeholder='Phone Number' className=' px-4 w-full outline-none focus:outline-none py-2 ' />
              </label>
             </div>
               <button className='bg-[rgb(94,45,21)] py-2 text-white font-popping'>Book for Free</button>
            </form>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  )
}
