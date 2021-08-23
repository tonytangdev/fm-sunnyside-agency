import React from 'react'

interface Props {
    title: string
    paragraph: string,
    underlineColor: string
}

export const TextSection = ({
    paragraph,
    title,
    underlineColor
}: Props) => {
    return (
        <div className="p-5 text-center flex flex-col items-center mb-9">
            <div className="w-[80%] mb-5">
                <h2 className="font-fraunces font-black text-2xl text-very-dark-desaturated-blue">
                    {title}
                </h2>
            </div>
            <div className="mb-5">
                <p className="font-barlow text-grayish-blue">
                    {paragraph}
                </p>
            </div>
            <a href="/" className={`font-fraunces font-black text-base custom-link-${underlineColor} relative`}>LEARN MORE</a>
        </div>
    )
}
