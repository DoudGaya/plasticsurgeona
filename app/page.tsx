import { Navigation } from '@/components/Navigation'
import { About } from '@/components/home/About'
import { Banner } from '@/components/home/Banner'
import { CallToAction } from '@/components/home/Socials'
import { HomeGrids } from '@/components/home/HomeGrids'
import { Gallery } from '@/components/home/Gallery'

export default function Home() {
  return (
    <main className=" flex flex-col w-full">
      <Banner />
      <HomeGrids />
      <CallToAction />
      <About />
      <Gallery />
    </main>
  )
}
