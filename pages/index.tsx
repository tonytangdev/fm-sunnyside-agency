import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SunnySideSvg from '../public/logo.svg'

import { Menu } from '@headlessui/react'
import MenuSvg from '../public/menu.svg'

const Home: NextPage = () => {
  return (
    <div className="bg-red-500 text-lg">
      <Head>
        <meta charSet="UTF-8" />
        <title>Frontend Mentor | Sunnyside agency landing page</title>
        <meta name="description" content="Frontend Mentor | Sunnyside agency landing page" />
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Fraunces:wght@700;900&display=swap" rel="stylesheet" />
      </Head>

      <header className="relative flex justify-between p-5">
        <Image src={SunnySideSvg} alt="logo" />

        <Menu as="div">
          <Menu.Button>
            <Image src={MenuSvg} alt="menu" />
          </Menu.Button>
          <Menu.Items className="">
            <div className="absolute right-0 origin-top-right w-full p-5 mt-4">
              <div className="bg-white text-center p-4">
                <div className="absolute h-0 w-0 right-5 top-0 origin-top-right inline-block border-white border-b-[25px] border-l-[25px] border-l-transparent"></div>
                <Menu.Item>
                  <div className="font-barlow text-dark-grayish-blue my-5">
                    <a href="#">
                      About
                    </a>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="font-barlow text-dark-grayish-blue my-5">
                    <a href="#">
                      Services
                    </a>

                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="font-barlow text-dark-grayish-blue my-5">
                    <a href="#">
                      Projects
                    </a>

                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="my-8">
                    <a href="#" className="bg-yellow py-3 px-5 rounded-full text-black font-semibold font-fraunces" >
                      CONTACT
                    </a>

                  </div>
                </Menu.Item>
              </div>
            </div>
          </Menu.Items>
        </Menu>
      </header>

      We are creatives

      Transform your brand

      We are a full-service creative agency specializing in helping brands grow fast.
      Engage your clients through compelling visuals that do most of the marketing for you.

      Learn more

      Stand out to the right audience

      Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.

      Learn more

      Graphic design
      Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.

      Photography
      Increase your credibility by getting the most stunning, high-quality photos that improve your business image.

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
        Coded by <a href="#">TonyTangDev</a>.
      </div>
    </div>
  )
}

export default Home
