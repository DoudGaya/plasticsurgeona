import { Navigation } from '@/components/Navigation'
import { About } from '@/components/home/About'
import { Banner } from '@/components/home/Banner'
import { CallToAction } from '@/components/home/CallToAction'
import { HomeGrids } from '@/components/home/HomeGrids'

export default function Home() {
  return (
    <main className=" flex flex-col w-full">
      <Banner />
      <HomeGrids />
      <CallToAction />
      <About />
    </main>
  )
}
