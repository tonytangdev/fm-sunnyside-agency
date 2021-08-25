import React from 'react'
import { TextWithImage } from './TextWithImage'
import TangerineImageMobile from '../public/mobile/image-photography.jpg'
import TangerineImageDesktop from '../public/desktop/image-photography.jpg'

interface Props {

}

export const Tangerine = (props: Props) => {
    const title = "Photography"
    const paragraph = "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."

    return (
        <>
            <div className="flex md:hidden">
                <TextWithImage image={TangerineImageMobile} title={title} paragraph={paragraph} />
            </div>
            <div className="hidden md:flex">
                <TextWithImage image={TangerineImageDesktop} title={title} paragraph={paragraph} />
            </div>
        </>
    )
}
