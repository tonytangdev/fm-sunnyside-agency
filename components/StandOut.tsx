import React from 'react'
import { TextSection } from './TextSection'

interface Props {

}

export const StandOut = (props: Props) => {
    return (
        <TextSection
            title="Stand out to the right audience"
            paragraph={`Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.`}
            underlineColor={'red'}
        />
    )
}
