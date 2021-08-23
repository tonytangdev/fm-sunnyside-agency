import Image from 'next/image'
import React from 'react'
import CherryImage from '../public/mobile/image-graphic-design.jpg'
import { TextWithImage } from './TextWithImage'

interface Props {

}

export const Cherry = (props: Props) => {
    return (
        <TextWithImage image={CherryImage} title="Graphic Design" paragraph="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention." />
    )
}
