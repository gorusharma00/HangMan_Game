import axios from "axios"

export async function getWord(value){
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await axios.get(`https://api.datamuse.com/words?rel_syn=${value}&max=10`)
        if(response.data.length === 0){
            throw new Error("No Word found for this input");  
        }
        let randomWord = Math.floor(Math.random() * response.data.length)
        return response.data[randomWord].word;
    }catch(err){
        throw err;
    }
}