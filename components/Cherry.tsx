import Image from 'next/image'
import React from 'react'
import CherryImageMobile from '../public/mobile/image-graphic-design.jpg'
import CherryImageDesktop from '../public/desktop/image-graphic-design.jpg'
import { TextWithImage } from './TextWithImage'

interface Props {

}

export const Cherry = (props: Props) => {
    const title = "Graphic Design"
    const paragraph = "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."

    return (
        <>
            <div className="flex md:hidden">
                <TextWithImage image={CherryImageMobile} title={title} paragraph={paragraph} />
            </div>
            <div className="hidden md:flex">
                <TextWithImage image={CherryImageDesktop} title={title} paragraph={paragraph} />
            </div>
        </>
    )
}
