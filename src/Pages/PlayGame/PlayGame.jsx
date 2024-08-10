import { useEffect, useState } from "react"
import LetterButtons from "../../components/LetterButtons/LetterButtons"
import MaskedText from "../../components/MaskedText/MaskedText"
import { useLocation } from "react-router-dom";
import HangMan from "../../components/HangMan/HangMan";
import WordHint from "../../components/WordHint/WordHint";
import WinnerModal from "../../components/WinnerModal/winnerModal";


function PlayGame(){
    const [usedLetters, setUsedLetters] = useState([]);

    const [chance, setChance] = useState(0)

    const [showWinnerModal, setWinnerModal] = useState(false)

    const [info, setInfo] = useState('');

    const location = useLocation();

    const wordSelected = location.state?.wordSelected
    const hint = location.state?.hint
    
    const [hintToggle, setHintToggle] = useState(false)


    const handleLetterClick = function(letter){
        if(!wordSelected.toUpperCase().includes(letter)){
            
            setChance(chance + 1)
        }

        setUsedLetters([...usedLetters, letter]);
    }

    useEffect(() => {
        if (chance >= 6) {
            setInfo('You Lose!!');
            setWinnerModal(true);
        } else if (usedLetters.join('').toUpperCase() === wordSelected.toUpperCase()) {
            setInfo('You Win!!');
            setWinnerModal(true);
        }
    }, [chance, usedLetters, wordSelected]);
    
    return(
        <div className="flex flex-row items-center justify-around mx-2 w-full h-full my-auto">

            <div className="flex flex-col items-center gap-14 h-full w-[40%]">

                <div>
                    <MaskedText text={wordSelected} usedLetters={usedLetters} />
                </div> 

                <div
                    className="flex w-full justify-center items-center"
                >
                    <WordHint hint={hint} hintToggle={hintToggle} setHintToggle={setHintToggle}/>
                </div>

                <div className="">  
                    <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick}/> 
                </div>

            </div>

            <div className="">
                <HangMan chance={chance} />
            </div>

            
            {showWinnerModal && 
                < WinnerModal 
                    showWinnerModal={showWinnerModal} wordSelected={wordSelected} info={info}
                />
            }
            
        </div>
    )
}

export default PlayGame