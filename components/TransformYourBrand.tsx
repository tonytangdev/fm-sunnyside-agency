interface Props {

}

export const TransformYourBrand = (props: Props) => {
    return (
        <div className="p-5 text-center flex flex-col items-center mb-9">
            <div className="w-[80%] mb-5">
                <h2 className="font-fraunces font-black text-2xl text-very-dark-desaturated-blue">
                    Transform your brand
                </h2>
            </div>
            <div className="mb-5">
                <p className="font-barlow text-grayish-blue">
                    We are a full-service creative agency specializing in helping brands grow fast.
                    Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
            </div>
            <a href="#" className="font-fraunces font-black text-base  custom-link relative">LEARN MORE</a>
        </div>
    )
}
