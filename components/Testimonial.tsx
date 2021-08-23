import Image from 'next/image'
import React from 'react'

interface Props {
    image: StaticImageData,
    paragraph: string,
    author: string,
    job: string
}

export const Testimonial = ({
    author,
    image,
    job,
    paragraph
}: Props) => {
    return (
        <div className="flex flex-col items-center justify-center mb-10">
            <div className="mb-6 w-[84px] h-[84px] rounded-[50%] overflow-hidden">
                <Image src={image} alt="emily" />
            </div>

            <div className="flex flex-col items-center">
                <p className="text-center font-barlow text-very-dark-grayish-blue mb-8">
                    {paragraph}
                </p>
                <span className="font-fraunces font-extrabold mb-2">{author}</span>
                <span className="font-barlow text-grayish-blue text-sm">{job}</span>
            </div>
        </div>
    )
}
