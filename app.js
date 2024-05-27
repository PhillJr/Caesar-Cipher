const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter(letter, shift){
    const i = alphabet.indexOf(letter.toLowerCase());
    const newI = (i + shift) % alphabet.length;
    return alphabet[newI];
}

function encryptMessage(word, shift){
    let encryptedMessage ="";
    for (let index = 0; index < word.length; index++) {
        
     encryptedMessage += encryptLetter(word[index], shift);
        
    }   
    return encryptedMessage;
}

function decryptLetter(letter, shift){
    const i =alphabet.indexOf(letter.toLowerCase());
    const newI = (i - shift + alphabet.length) % alphabet.length;
    return alphabet[newI]
}

function decryptMessage(word, shift){
    let decryptedMessage = "";
    for (let index = 0; index < word.length; index++) {
       decryptedMessage += decryptLetter(word[index], shift); 
        
    }
    return decryptedMessage;
}

//Yes, Caeasar will get "BRUTUS" back, the decryption Function is the inverse of the 
// original function.
