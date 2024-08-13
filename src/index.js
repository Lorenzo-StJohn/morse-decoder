const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let result = '';
    let key;
    let j = 0;
    for (let i = 0; i < expr.length; i += 10) {
        j = 0;
        if (expr[i] === '*') result += ' ';
        else {
            while (expr[i + j] === '0') j += 2;
            key = '';
            for (; j < 10; j += 2) {
                if (expr[i + j + 1] === '0') key += '.';
                else key += '-';
            }
            result += MORSE_TABLE[key];
        }
    }
    return result;
}

module.exports = {
    decode
}