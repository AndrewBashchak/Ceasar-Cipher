function caesarCipher(str, shift) {.
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char >= "A" && char <= "Z") {
            result += String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
        }
        
        else if (char >= "a" && char <= "z") {
            result += String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
        } else {
            result += char;
        }
    }

    return result;
}

let text = "UkD";
let shift = -2;
let encryptedText = caesarCipher(text, shift);
console.log(encryptedText)
