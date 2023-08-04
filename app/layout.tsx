import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import Head from 'next/head'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plastic Surgeona | Expert Touch',
  description: 'PlasticSurgeonA offers world-class plastic surgery services in Turkey. Our expert plastic surgeons provide a wide range of cosmetic procedures. Contact us for a consultation!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          key="desc"
          content="PlasticSurgeonA offers world-class plastic surgery services in Turkey. Our expert plastic surgeons provide a wide range of cosmetic procedures. Contact us for a consultation!"
        />
        <meta name="keywords"
          content="plastic surgery, 
          cosmetic surgery,
          united state,
          plastic surgeon,
          Turkey, global plastic surgery,
          aesthetic procedures,
          plastic surgery Turkey,
          best plastic surgeon,
          plastic surgery clinic,
          plastic surgery center,
          face lift, rhinoplasty,
          breast augmentation,
          liposuction,
          tummy tuck,
          mommy makeover,
          body contouring,
          non-surgical treatments,
          Botox,
          dermal fillers,
          facial rejuvenation,
          turkey plastic surgery,
          plastic surgeon in Turkey" />


        <title className=' font-rale italic'>Plastic Surgeona | Expert Touch</title>
        <meta name='robots' content='index,follow' />
        <meta property="og:title" content="Global Plastic Surgery in Turkey | PlasticSurgeonA" />
        <meta property="og:description" content="PlasticSurgeonA offers world-class plastic surgery services in Turkey. Our expert plastic surgeons provide a wide range of cosmetic procedures. Contact us for a consultation!" />
        <meta property="og:image" content="https://plasticsurgeona.com/images/og-image.jpg" /> 
        <meta property="og:url" content="https://plasticsurgeona.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PlasticSurgeonA" />

        <meta
          property="og:image"
          content="../public/logo.png"
           />
                    
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@plasticsurgeona" />
        <meta name="twitter:title" content="Global Plastic Surgery in Turkey | PlasticSurgeonA" />
        <meta name="twitter:description" content="PlasticSurgeonA offers world-class plastic surgery services in Turkey. Our expert plastic surgeons provide a wide range of cosmetic procedures. Contact us for a consultation!" />
        <meta name="twitter:image" content="https://plasticsurgeona.com/images/twitter-card-image.jpg" /> 

        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5,minimum-scale=1,user-scalable=yes" />
        <link rel="canonical" href="https://www.plasticsurgeona.com/" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta property="og:site_name" content="Plastic Surgeona" />
        <meta property="og:title" content="Plastic Surgeona" />
        
      </Head>
      <body className={`${inter.className} bg-[rgb(253,243,238)]`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
