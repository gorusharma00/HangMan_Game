import { useEffect, useState } from "react"
import LetterButtons from "../../components/LetterButtons/LetterButtons"
import MaskedText from "../../components/MaskedText/MaskedText"
import { useLocation } from "react-router-dom";
import HangMan from "../../components/HangMan/HangMan";
import WinnerModal from "../../components/WinnerModal/WinnerModal";
import HintBtn from "../../components/Button/HintBtn";
import { useQuery } from "react-query";
import { getHint } from "../../services/getHint";


function PlayGame(){
    const [usedLetters, setUsedLetters] = useState([]);

    const [chance, setChance] = useState(0)

    const [showWinnerModal, setWinnerModal] = useState(false)

    const [info, setInfo] = useState('');

    const location = useLocation();

    const wordSelected = location.state?.wordData

    const [showHint, setShowHint] = useState(false)
    const [hintBtn, setHintBtn] = useState(true)


    const { data, isLoading, isError, error} = useQuery(['getHint', wordSelected], () => getHint(wordSelected), {
        enabled: showHint,
        retry: false,
        cacheTime: 1000 * 60 * 2,
        onSuccess: () => {setShowHint(false)},
        onError: () => setShowHint(false),
    })
    


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
        }

        const allLettersGuessed = wordSelected.split('').every(letter => 
            usedLetters.includes(letter.toUpperCase())
        );
        if (allLettersGuessed) {
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
                    {hintBtn && <HintBtn 
                                    onClick={() => {
                                            setShowHint(true)
                                            setHintBtn(false)
                                        }
                    }/>}
                    {isLoading && <div>Loading...</div>}
                    {isError && <div>{error.message}</div>}
                    <p>{data}</p>
                </div>

                <div className="">  
                    <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick}/> 
                </div>

            </div>

            <div className="mt-2">
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

{/*  every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. 
            
             let allLettersGuessed = true;

                for (let letter of wordSelected.toUpperCase()) {
                    if (!usedLetters.includes(letter)) {
                        allLettersGuessed = false;
                        break;
                    }
                }
            
*/ }