function TextInput({value, onChange}){
    return(
        <>
            <input 
                type="text" 
                placeholder="Enter a related word"
                value={value}
                onChange={onChange}
                className="text-xl px-2 py-2 w-[25%] text-center"
                required
            />
        </>
    )
}

export default TextInput