import Image from 'next/image'
import React from 'react'
import CherryImage from '../public/mobile/image-graphic-design.jpg'

interface Props {

}

export const Cherry = (props: Props) => {
    return (
        <div className="relative">
            <Image src={CherryImage} alt="cherry"></Image>
            <div className="absolute bottom-0 text-center mb-16">
                <h2 className="font-fraunces font-black text-3xl text-very-dark-grayish-blue mb-10">Graphic design</h2>
                <p className="font-barlow px-4 text-base text-very-dark-grayish-blue">
                    Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                </p>
            </div>
        </div>
    )
}
