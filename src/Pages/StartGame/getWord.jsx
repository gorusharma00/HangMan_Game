export async function getWord(value) {
    const response = await fetch(`https://api.datamuse.com/words?rel_syn=${value}&max=1`);
    const object = await response.json();

    return  object[0]?.word
}