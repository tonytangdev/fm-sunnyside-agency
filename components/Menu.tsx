import Image from 'next/image'
import { Menu as HeadlessMenu } from '@headlessui/react'
import MenuSvg from '../public/menu.svg'

interface Props {

}

export const Menu = (props: Props) => {
    return (
        <HeadlessMenu as="div">
            <HeadlessMenu.Button>
                <Image src={MenuSvg} alt="menu" />
            </HeadlessMenu.Button>
            <HeadlessMenu.Items className="">
                <div className="absolute right-0 origin-top-right w-full p-5 mt-4">
                    <div className="bg-white text-center p-4">
                        <div className="absolute h-0 w-0 right-5 top-0 origin-top-right inline-block border-white border-b-[25px] border-l-[25px] border-l-transparent"></div>
                        <HeadlessMenu.Item>
                            <div className="font-barlow text-dark-grayish-blue my-5">
                                <a href="/">
                                    About
                                </a>
                            </div>
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item>
                            <div className="font-barlow text-dark-grayish-blue my-5">
                                <a href="/">
                                    Services
                                </a>

                            </div>
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item>
                            <div className="font-barlow text-dark-grayish-blue my-5">
                                <a href="/">
                                    Projects
                                </a>

                            </div>
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item>
                            <div className="my-8">
                                <a href="/" className="bg-yellow py-3 px-5 rounded-full text-black font-semibold font-fraunces" >
                                    CONTACT
                                </a>

                            </div>
                        </HeadlessMenu.Item>
                    </div>
                </div>
            </HeadlessMenu.Items>
        </HeadlessMenu>
    )
}
