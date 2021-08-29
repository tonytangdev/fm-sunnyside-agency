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
        <div className="relative grid">
            <Image src={image} alt="cherry"></Image>
            <div className="absolute top-[60%] origin-top text-center flex flex-col w-full justify-center">
                <h2 className="font-fraunces font-black text-3xl text-very-dark-grayish-blue mb-10 md:mb-10 md:text-2xl">{title}</h2>
                <div className="md:flex md:justify-center">
                    <p className="font-barlow px-4 text-base text-very-dark-grayish-blue w-full md:text-base md:w-[400px]">
                        {paragraph}
                    </p>
                </div>
            </div>
        </div>
    )
}
