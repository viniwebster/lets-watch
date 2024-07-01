interface Props {
    text: string
}

const Title = ({ text } : Props) => {
    return(
        <h1 className="text-center text-4xl text-txt-title font-bold">
            {text}
        </h1>
    )
}

export default Title