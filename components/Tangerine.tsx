import React from 'react'
import { TextWithImage } from './TextWithImage'
import TangerineImage from '../public/mobile/image-photography.jpg'

interface Props {

}

export const Tangerine = (props: Props) => {
    return (
        <TextWithImage image={TangerineImage} title="Photography" paragraph="Increase your credibility by getting the most stunning, high-quality photos that improve your business image." />
    )
}
