const words = 'hello world';

function showWords(words) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz ';
    let result = '';
    for (iWord of words) {
        for (iAlphabet of alphabet) {
            console.log(result + iAlphabet);
            if(iWord === iAlphabet) {
                result += iAlphabet;
                break;
            }
        }
        console.log(result);
    }
}

showWords(words);