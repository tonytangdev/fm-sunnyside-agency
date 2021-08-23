import Image from 'next/image'
import React from 'react'

interface Props {
    image: StaticImageData,
    title: string,
    paragraph: string
}

export const TextWithImage = ({
    image,
    paragraph,
    title
}: Props) => {
    return (
        <div className="relative flex">
            <Image src={image} alt="cherry"></Image>
            <div className="absolute bottom-0 text-center mb-16">
                <h2 className="font-fraunces font-black text-3xl text-very-dark-grayish-blue mb-10">{title}</h2>
                <p className="font-barlow px-4 text-base text-very-dark-grayish-blue">
                    {paragraph}
                </p>
            </div>
        </div>
    )
}
