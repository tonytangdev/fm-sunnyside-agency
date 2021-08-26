import Image from 'next/image'
import HeaderImgMobile from '../public/mobile/image-header.jpg'
import HeaderImgDesktop from '../public/desktop/image-header.jpg'
import ArrowDownSvg from '../public/icon-arrow-down.svg'

interface Props {

}

export const Hero = (props: Props) => {
    return (
        <div className="relative flex">
            <div className="absolute flex flex-col z-10 text-white font-fraunces font-black max-w-[375px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:max-w-full md:w-full">
                <h1 className="mb-16 text-4xl tracking-[0.3em] text-center">
                    WE ARE CREATIVES
                </h1>
                <div className="flex justify-center">
                    <Image className="cursor-pointer" src={ArrowDownSvg} alt="arrow down" onClick={() => console.log('Orange')} />
                </div>
            </div>
            <div className="flex md:hidden">
                <Image src={HeaderImgMobile} alt="orange image" />
            </div>
            <div className="hidden md:flex">
                <Image src={HeaderImgDesktop} alt="orange image" />
            </div>
        </div>
    )
}
