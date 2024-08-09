import { useNavigate } from 'react-router-dom'
import TextInputFormContainer from '../.././components/TextInputForm/TextInputFormContainer'
import { getWord } from './getWord';

function StartGame(){
    const navigate = useNavigate();

    async function handleSubmit(value){
        const word = await getWord(value)
        navigate('/play', {state:{ wordSelected: word}})
    }

    return(
        <div 
            className='flex justify-center items-center flex-grow font-carter flex-col gap-4'
        >
            
        <h3 className='text-3xl'>A Word Guessing Game</h3>
        <p>Enter a word and try to guess related words. Need help? Use a hint!</p>
        <TextInputFormContainer onSubmit={handleSubmit}/>

      </div>
    )
}

export default StartGame