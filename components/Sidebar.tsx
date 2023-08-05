"use client"
import Image from 'next/image'
import logo from '@/public/assets/logo.png'
import { useGlobanNavContext } from './context/MobileNavContext'
export const Sidebar = () => {
        const {nav}: any = useGlobanNavContext()
  return (
      <>
          { nav &&
        <div className=' h-screen md:hidden fixed w-2/3 bg-secondary border-r z-50 py-4 px-6 border-primary'>
            <div className=" flex flex-col border-b border-primary py-2">
              <Image src={ logo } alt='Plastic Surgeona' className=' h-10 object-left object-contain' />
            </div>
        </div>
      }
      </>
  )
}
