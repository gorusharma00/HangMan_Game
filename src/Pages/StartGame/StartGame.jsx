import { useNavigate } from 'react-router-dom'
import TextInputFormContainer from '../../components/TextInputForm/TextInputFormContainer'
import { getWord } from '../../services/getWord';
import { useQuery } from "react-query"
import { useState, useEffect } from 'react';

function StartGame() {
    const [word, setWord] = useState('');
    const navigate = useNavigate();

    const { data, isLoading, isError, error } = useQuery(['getWord', word], () => getWord(word), {
        enabled: word !== "",
        retry: false,
    })

    useEffect(() => {
        if (data) {
            navigate('/play', { state: { wordData: data } });
        }
        if (isError) {
            navigate('/*', { state: { err: error.message } });
        }
    }, [data, isError, error, navigate]);

    function handleSubmit(submittedWord) {
        setWord(submittedWord);
    }

    if (isLoading) return <div className='w-full flex-grow flex justify-center items-center'>Loading...</div>

    return (
        <div className='flex justify-center items-center flex-grow font-carter flex-col gap-4'>
            <h3 className='text-3xl'>A Word Guessing Game</h3>
            <p>Enter a word and try to guess related words. Need help? Use a hint!</p>
            <TextInputFormContainer onSubmit={handleSubmit} />
        </div>
    )
}

export default StartGame
