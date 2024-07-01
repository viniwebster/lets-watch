interface Props {
    value: string,
    placeholder: string,
    setInput: React.Dispatch<React.SetStateAction<string>>
}

const InputText = ({ value, setInput, placeholder }: Props) => {
    return (
        <input 
            className="max-w-screen-sm w-full h-20 rounded-lg bg-bg-input text-txt-title outline-none placeholder:text-txt-title py-1 pl-5"
            placeholder={placeholder}
            value={value} 
            onChange={(e) => setInput(e.target.value)} 
        />
    )
}

export default InputText