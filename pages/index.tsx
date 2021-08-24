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
import Link from 'next/link'
import { Testimonial } from '../components/Testimonial'
import HeaderImg from '../public/mobile/image-header.jpg'

import Profile1 from '../public/image-emily.jpg'
import Profile2 from '../public/image-thomas.jpg'
import Profile3 from '../public/image-jennie.jpg'

import MilkImage from '../public/mobile/image-gallery-milkbottles.jpg'
import OrangeCutImage from '../public/mobile/image-gallery-orange.jpg'
import IceConeImage from '../public/mobile/image-gallery-cone.jpg'
import SugarImage from '../public/mobile/image-gallery-sugar-cubes.jpg'
import { Logo } from '../components/Logo'
import FacebookIcon from '../public/icon-facebook.svg'
import InstagramIcon from '../public/icon-instagram.svg'
import PinterestIcon from '../public/icon-pinterest.svg'
import TwitterIcon from '../public/icon-twitter.svg'



const Home: NextPage = () => {
  return (
    <div className="text-lg">
      <Head>
        <meta charSet="UTF-8" />
        <title>Frontend Mentor | Sunnyside agency landing page</title>
        <meta name="description" content="Frontend Mentor | Sunnyside agency landing page" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <header className="fixed flex justify-between p-5 z-[1000] w-full">
        <Image src={SunnySideSvg} alt="logo" />

        <Menu />
      </header>

      <main>
        <Hero />
        <Image src={EggImage} alt="egg" />
        <section>
          <TransformYourBrand />
        </section>
        <Image src={CupImage} alt="cup" />
        <section>
          <StandOut />
        </section>
        <section>
          <Cherry />
        </section>
        <section>
          <Tangerine />
        </section>
      </main>

      <section className="px-8 py-14">
        <h3 className="font-fraunces font-black tracking-[0.3em] text-center text-grayish-blue text-base mb-10">CLIENT TESTIMONIALS</h3>

        <Testimonial
          image={Profile1}
          paragraph="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          author="Emily R."
          job="Marketing Director"
        />

        <Testimonial
          image={Profile2}
          paragraph="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          author="Thomas S."
          job="Chief Operating Officer"
        />

        <Testimonial
          image={Profile3}
          paragraph="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          author="Jennie F."
          job="Business Owner"
        />

      </section>

      <div className="grid grid-cols-2 grid-rows-2">
        <Image src={MilkImage} alt="milk"></Image>
        <Image src={OrangeCutImage} alt="orange cut in half"></Image>
        <Image src={IceConeImage} alt="ice cone"></Image>
        <Image src={SugarImage} alt="sugar"></Image>
      </div>

      <footer className="bg-green flex items-center flex-col px-10 py-16">
        <div className="w-48 mb-8">
          <Logo viewBox="0 0 125 24" color="var(--very-dark-grayish-blue)" />
        </div>
        <div className="flex justify-between w-full font-barlow text-dark-grayish-blue mb-8">
          <span>About</span>
          <span>Services</span>
          <span>Projects</span>
        </div>
        <div className="flex justify-around w-full font-barlow text-dark-grayish-blue mb-8">
          <Image src={FacebookIcon} alt="facebook"></Image>
          <Image src={InstagramIcon} alt="instagram"></Image>
          <Image src={TwitterIcon} alt="twitter"></Image>
          <Image src={PinterestIcon} alt="pinterest"></Image>
        </div>
      </footer>
      <div className="attribution font-barlow p-10 bg-green">
        <div>
          Challenge by {" "}
          <Link href="https://www.frontendmentor.io?ref=challenge">
            <a className="underline">Frontend Mentor</a>
          </Link>.
        </div>
        <div>
          Coded by <Link href="https://github.com/tonytangdev"><a className="underline">TonyTangDev</a></Link>.
        </div>
      </div>


    </div>
  )
}

export default Home
