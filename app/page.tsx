import { Navigation } from '@/components/Navigation'
import { Banner } from '@/components/home/Banner'
import { HomeGrids } from '@/components/home/HomeGrids'

export default function Home() {
  return (
    <main className=" flex flex-col w-full">
      <Banner />
      <HomeGrids />
    </main>
  )
}
