import StartGameBtn from "../Button/StartGameBtn";
import TextInput from "../TextInput/TextInput";

function TextInputForm({handleValueSubmit, textInputChange, value}){

    return(
        <form 
            className="flex flex-col gap-4 w-full items-center"
            onSubmit={handleValueSubmit}
        >
            <TextInput 
                value={value}
                onChange={textInputChange} 
            />

            <StartGameBtn value="Start Game" />
        </form>
    )
}

export default TextInputForm