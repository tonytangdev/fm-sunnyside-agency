import Image from 'next/image'
import Link from 'next/link'
import { Popover } from '@headlessui/react'
import MenuSvg from '../public/menu.svg'

interface Props {

}

export const Menu = (props: Props) => {
    return (
        <nav className="flex-1">
            <div className="hidden md:flex justify-end gap-10">
                <div className="font-barlow text-white">
                    <Link href="/">
                        <a>
                            About
                        </a>
                    </Link>
                </div>
                <div className="font-barlow text-white">
                    <Link href="/">
                        <a>
                            Services
                        </a>
                    </Link>
                </div>
                <div className="font-barlow text-white">
                    <Link href="/">
                        <a>
                            Projects
                        </a>
                    </Link>
                </div>
                <div className="">
                    <Link href="/">
                        <a className="bg-yellow py-3 px-5 rounded-full text-black font-semibold font-fraunces md:bg-white md:text-black" >
                            CONTACT
                        </a>
                    </Link>
                </div>
            </div>
            <Popover>
                <div className="md:hidden">
                    <Popover.Button>
                        <Image src={MenuSvg} alt="menu" />
                    </Popover.Button>
                </div>
                <Popover.Panel className="md:hidden">
                    <div className="absolute right-0 origin-top-right w-full p-5 mt-4">
                        <div className="bg-white text-center p-4">
                            <div className="absolute h-0 w-0 right-5 top-0 origin-top-right inline-block border-white border-b-[25px] border-l-[25px] border-l-transparent"></div>
                            <div className="font-barlow text-dark-grayish-blue my-5">
                                <Link href="/">
                                    <a>
                                        About
                                    </a>
                                </Link>
                            </div>
                            <div className="font-barlow text-dark-grayish-blue my-5">
                                <Link href="/">
                                    <a>
                                        Services
                                    </a>
                                </Link>
                            </div>
                            <div className="font-barlow text-dark-grayish-blue my-5">
                                <Link href="/">
                                    <a>
                                        Projects
                                    </a>
                                </Link>
                            </div>
                            <div className="my-8">
                                <Link href="/">
                                    <a className="bg-yellow py-3 px-5 rounded-full text-black font-semibold font-fraunces" >
                                        CONTACT
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Popover>
        </nav>
    )
}
