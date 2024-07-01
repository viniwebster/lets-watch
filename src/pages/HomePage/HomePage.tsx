import { useState } from "react";
import Card from "../../components/Card/Card"
import InputText from "../../components/Input/Input"
import Title from "../../components/Title/Title"


const HomePage = () => {
    const [value, setValue] = useState("");
    return (
        <div className="container">
            <Title text="Let's Watch" />
            <div className="flex flex-col justify-center items-center my-12">
                <InputText value={value} setInput={setValue} placeholder="Digite algum filme para pesquisar..." />
            </div>
            <div className="flex flex-col items-center justify-center gap-12">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default HomePage