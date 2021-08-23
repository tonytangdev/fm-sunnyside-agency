import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Hero } from '../components/Hero'
import { Menu } from '../components/Menu'
import { TransformYourBrand } from '../components/TransformYourBrand'
import SunnySideSvg from '../public/logo.svg'
import EggImage from "../public/mobile/image-transform.jpg"
import CupImage from '../public/mobile/image-stand-out.jpg'
import { StandOut } from '../components/StandOut'
import { Cherry } from '../components/Cherry'
import { Tangerine } from '../components/Tangerine'



const Home: NextPage = () => {
  return (
    <div className="text-lg">
      <Head>
        <meta charSet="UTF-8" />
        <title>Frontend Mentor | Sunnyside agency landing page</title>
        <meta name="description" content="Frontend Mentor | Sunnyside agency landing page" />
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Fraunces:wght@700;900&display=swap" rel="stylesheet" />
      </Head>

      <header className="fixed flex justify-between p-5 z-[1000] w-full">
        <Image src={SunnySideSvg} alt="logo" />

        <Menu />
      </header>

      <main>
        <Hero />
        <Image src={EggImage} alt="egg" />
        <TransformYourBrand />
        <Image src={CupImage} alt="cup" />
        <StandOut />
        <Cherry />
        <Tangerine />
      </main>

      Client testimonials

      We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
      Emily R.
      Marketing Director

      Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
      Thomas S.
      Chief Operating Officer

      Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
      Jennie F.
      Business Owner

      About
      Services
      Projects
      Contact

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="/">TonyTangDev</a>.
      </div>
    </div>
  )
}

export default Home
