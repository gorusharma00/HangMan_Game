import axios from "axios"

export async function getHint(word) {
    const apiKey = import.meta.env.VITE_APIKEY;

    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}`, {
            params: {
                key: apiKey,
            }
        });
        if (response.data[0].shortdef === undefined) {
            throw new Error("No Hint found for word.");
        }
        let randomHint = Math.floor(Math.random() * response.data[0].shortdef.length);
        return response.data[0].shortdef[randomHint]

    } catch(err){
        throw err
    }
}