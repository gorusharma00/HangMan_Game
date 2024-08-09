/**
 * 
 * @param {text} the word to be guessed
 * @param {usedLetters} the array of letters that have been guessed so far
*/

import { getAllCharacters } from "./MaskedTextUtility"

function MaskedText({text, usedLetters}){
    const letters = getAllCharacters(text, usedLetters).split('');

    return(
        <>
            {letters.map((letter, index) => {
                return (
                    <span 
                        key={`letter-${index}`}
                        className="font-carter inline-block mx-2 text-3xl"
                    >{letter}</span>
                )
            })}
        </>
    )
}

export default MaskedText