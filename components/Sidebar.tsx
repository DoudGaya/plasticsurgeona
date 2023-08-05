"use client"
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/assets/logo.png'
import { useGlobanNavContext } from './context/MobileNavContext'
export const Sidebar = () => {
        const {nav, navSwitcher}: any = useGlobanNavContext()

    
    const changeNav = () => {
        return navSwitcher()
    }
  return (
      <>
          { nav &&
            <div  className=' h-screen flex flex-col md:hidden fixed w-2/3 bg-secondary border-r z-50 py-4 px-6 border-primary'>
            <Link href={'/'} className=" flex flex-col border-b border-primary py-2">
              <Image src={ logo } alt='Plastic Surgeona' className=' h-10 object-left object-contain' />
            </Link>
            <div className="">
                <ul className=' flex py-6 flex-col space-y-3'>
                    <li onClick={changeNav}>
                        <Link  className=' py-2  hover:underline font-rale text-xl' href={'/'}>Home</Link>
                    </li>
                    <li onClick={changeNav}>
                        <Link  className=' py-2  hover:underline font-rale text-xl' href={'/consultation'}>Consultation</Link>
                    </li>
                    <li onClick={changeNav}>
                        <Link  className=' py-2  hover:underline font-rale text-xl' href={'/services'}>Services</Link>
                    </li>
                    <li onClick={changeNav}>
                        <Link className=' py-2  hover:underline font-rale text-xl' href={'/gallery'}>Gallery</Link>
                    </li>
                </ul> 
            </div>
                 
        </div>
      }
      </>
  )
}
