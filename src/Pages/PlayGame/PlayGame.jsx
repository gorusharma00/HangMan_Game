import { useState } from "react"
import LetterButtons from "../../components/LetterButtons/LetterButtons"
import MaskedText from "../../components/MaskedText/MaskedText"
import { useLocation } from "react-router-dom";
import HangMan from "../../components/HangMan/HangMan";

function PlayGame(){
    const [usedLetters, setUsedLetters] = useState([]);

    const [chance, setChance] = useState(0)

    const location = useLocation();

    const wordSelected = location.state?.wordSelected

    const handleLetterClick = function(letter){
        if(!wordSelected.toUpperCase().includes(letter)){
            console.log('incorrect');
            
            setChance(chance + 1)
        }

        setUsedLetters([...usedLetters, letter]);
    }

    return(
        <div className="flex flex-row items-center justify-around mx-2 w-full h-full my-auto">

            <div className="flex flex-col items-center gap-14 h-full w-[40%]">

                <div>
                    <MaskedText text={wordSelected} usedLetters={usedLetters} />
                </div> 

                <div>Show Hint</div>

                <div className="">  
                    <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick}/> 
                </div>

            </div>

            <div className="">
                <HangMan chance={chance} />
            </div>
            
        </div>
    )
}

export default PlayGame