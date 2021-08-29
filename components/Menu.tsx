import Image from 'next/image'
import Link from 'next/link'
import { Popover } from '@headlessui/react'
import MenuSvg from '../public/menu.svg'

interface Props {

}

export const Menu = (props: Props) => {
    return (
        <Popover>
            <Popover.Button>
                <Image src={MenuSvg} alt="menu" />
            </Popover.Button>
            <Popover.Group as="nav" className="">
                <Popover.Panel>
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
            </Popover.Group>
        </Popover>
    )
}
