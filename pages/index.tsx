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

import Profile1 from '../public/image-emily.jpg'
import Profile2 from '../public/image-thomas.jpg'
import Profile3 from '../public/image-jennie.jpg'



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

      About
      Services
      Projects
      Contact

      <div className="attribution">
        Challenge by
        <Link href="https://www.frontendmentor.io?ref=challenge">
          <a>Frontend Mentor</a>
        </Link>.
        Coded by <Link href="/"><a>TonyTangDev</a></Link>.
      </div>
    </div>
  )
}

export default Home
