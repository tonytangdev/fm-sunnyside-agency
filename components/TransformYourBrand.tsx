import { TextSection } from "./TextSection"

interface Props {

}

export const TransformYourBrand = (props: Props) => {
    return (
        <TextSection
            title="Transform your brand"
            paragraph={`We are a full-service creative agency specializing in helping brands grow fast.
        Engage your clients through compelling visuals that do most of the marketing for you.`}
        underlineColor={'yellow'}
        />

    )
}
