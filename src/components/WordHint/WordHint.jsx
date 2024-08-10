import HintBtn from "../Button/HintBtn"

function WordHint({ hint, hintToggle, setHintToggle}){
    return(
        <>
            {!hintToggle ? (
                <HintBtn onClick={() => setHintToggle(true)}/>
            ):(
                <p>{hint}</p>
            )}
        </>
    )
}

export default WordHint