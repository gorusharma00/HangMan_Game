import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputContainer({onSubmit}){

    const [value, setValue] = useState('')

    function handleValueSubmit(e){
        e.preventDefault()
        onSubmit?.(value);
        
    }

    function textInputChange(event){
        setValue(event.target.value)
    }

    return(
        <TextInputForm 
            handleValueSubmit={handleValueSubmit}
            textInputChange={textInputChange}
            value={value}
        />
    )
}

export default TextInputContainer