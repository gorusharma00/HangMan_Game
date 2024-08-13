export async function Nothing(value) {
    const wordUrl = `https://api.datamuse.com/words?rel_syn=${value}&max=10`
    
 
    const response = await fetch(wordUrl);
    const object = await response.json();
    let randomWord = Math.floor(Math.random() * object.length)
    const word = object[randomWord]?.word;
    let hint = '';
    
    const hintUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}`
    const hintUrlWithKey = `${hintUrl}?key=${apiKey}`;

    try {
        const hintResponse = await fetch(hintUrlWithKey);
        const data = await hintResponse.json();
        

        if (data[0].shortdef !== undefined) {
            let trimHint = data[0].shortdef.join(',')
            trimHint = trimHint.split(',')
            const randomHint = Math.floor(Math.random() * trimHint.length);
            hint = trimHint[randomHint]
        } else {
            throw new Error("No Hint found for word.");
        }
    } catch (err) {
        hint = err.message;
    }

    return [word, hint];
}