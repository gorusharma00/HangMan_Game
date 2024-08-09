
const AlphaBets = new Array(26).fill('').map((e, index) => String.fromCharCode(65 + index))

function LetterButtons({ text, usedLetters, onLetterClick }){
    const originalCharacters = new Set(text.toUpperCase().split(''));
    const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''));

    const buttonStyle = function(letter){
        if(selectedLetters.has(letter)){
            return `${originalCharacters.has(letter)? 'border-green-600' : 'border-red-600'}`
        }else{
            return `border-black`
        }
    }

    const handleClick = function(event){
        const character = event.target.value
        onLetterClick?.(character)
    }

    const buttons = AlphaBets.map(letter => {
        return(
            <button 
                key={`button-${letter}`}
                value={letter}
                disabled={selectedLetters.has(letter)}
                onClick={handleClick}
                className={`font-carter h-12 w-12 m-1 rounded-md border-4 ${buttonStyle(letter)}`}
            >
                {letter}
            </button>
        )
    })
    return(
        <>
            {buttons}
        </>
    )
}

export default LetterButtons