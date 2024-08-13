import axios from "axios"

export async function getHint(word) {
    const apiKey = import.meta.env.VITE_APIKEY;

    try {
        const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}`, {
            params: {
                key: apiKey,
            }
        });

        let randomHint = Math.floor(Math.random() * response.data[0].shortdef.length);
        return response.data[0].shortdef[randomHint];
    } catch{
        return null;
    }
}