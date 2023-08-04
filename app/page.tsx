import { Navigation } from '@/components/Navigation'
import { About } from '@/components/home/About'
import { Banner } from '@/components/home/Banner'
import { CallToAction } from '@/components/home/Socials'
import { HomeGrids } from '@/components/home/HomeGrids'
import { Gallery } from '@/components/home/Gallery'
import { Testimonials } from '@/components/home/Testimonials'
import { BeforeAndAfter } from '@/components/home/BeforeAndAfter'
import { WhatWeOffer } from '@/components/home/WhatWeOffer'
import { Newsletter } from '@/components/Newsletter'
export default function Home() {
  return (
    <main className=" flex flex-col w-full">
      <Banner />
      <WhatWeOffer />
      <HomeGrids />
      <CallToAction />
      <About />
      <Gallery />
      <Testimonials />
      <BeforeAndAfter />
      <Newsletter />
    </main>
  )
}
