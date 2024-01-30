type PasswordGen = {
    length:number,
    includeUpperCase:boolean,
    includeLowerCase:boolean,
    includeNumbers:boolean,
    includeSymbols:boolean,
}


const AllLowerCases = 'abcdefghijklmnopqrstuvwxyz';
const AllUpperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = `!@#$%^&*()-_=+{}|;:'",.<>?/`

function generatePassword({ length, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols }: PasswordGen) {
    let chars = '';
    if (includeUpperCase) chars += AllUpperCases;
    if (includeLowerCase) chars += AllLowerCases;
    if (includeNumbers) chars += NUMBERS;
    if (includeSymbols) chars += SYMBOLS;

    let password = '';

    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return password;
}


export {generatePassword}

