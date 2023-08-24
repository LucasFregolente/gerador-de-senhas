const passwordId = document.querySelector("#PasswordId");
const length = document.querySelector("#LengthId");
const infoLength = document.querySelector('label[for="LengthId"]');
const generatePass = document.querySelector("#generatePassId");

const lower = document.querySelector("#LowerId");
const upper = document.querySelector("#UpperId");
const numbers = document.querySelector("#NumberId");
const symbols = document.querySelector("#SymbolsId");

const listNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const listSymbols = ["!", "@", "#", "$", "%"];

const characters = Array.from(Array(26)).map((_, i) => i + 97);
const lowercaseCharacters = characters.map((item) => String.fromCharCode(item));
const uppercaseCharacters = lowercaseCharacters.map((item) => item.toUpperCase());

infoLength.innerHTML = length.value;

length.addEventListener("input", () => {
    infoLength.innerHTML = length.value;
});

generatePass.addEventListener("click", () => {
    generatePassword(
        numbers.checked,
        symbols.checked,
        lower.checked,
        upper.checked,
        length.value
    );
});

const generatePassword = (
    hasNumbers,
    hasSymbols,
    hasLowercase,
    hasUppercase,
    length
) => {
    const newArray = [
        ...(hasNumbers ? listNumbers : []),
        ...(hasSymbols ? listSymbols : []),
        ...(hasLowercase ? lowercaseCharacters : []),
        ...(hasUppercase ? uppercaseCharacters : []),
    ];

    if (newArray.length === 0) return;

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * newArray.length);
        password += newArray[randomIndex];
    }

    passwordId.value = password;
};
