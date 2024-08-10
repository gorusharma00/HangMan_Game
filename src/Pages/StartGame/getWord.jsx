export async function getWord(value) {
    const wordUrl = `https://api.datamuse.com/words?rel_syn=${value}&max=1`
    const apiKey = `49408855-bb79-4cb2-a152-15ebca97c8a0`;
 
    const response = await fetch(wordUrl);
    const object = await response.json();
    const word = object[0]?.word;
    let hint = '';
    
    const hintUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}`
    const hintUrlWithKey = `${hintUrl}?key=${apiKey}`;

    try {
        const hintResponse = await fetch(hintUrlWithKey);
        const data = await hintResponse.json();
        console.log(data);

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