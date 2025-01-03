import React, { useState } from "react";
import PasswordInput from './PasswordInput';

const PasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const generatePassword = () => {
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

        let characters = lowercase;
        if (includeUppercase) characters += uppercase;
        if (includeNumbers) characters += numbers;
        if (includeSymbols) characters += symbols;

        let newPassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            newPassword += characters[randomIndex];
        }
        setPassword(newPassword);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert("Mot de passe copié !");
    };

    return (
        <>
            <article>
                <header><h2>Générateur de mots de passe</h2></header>
                <PasswordInput
                    value={password}
                    readOnly
                    placeholder="Mot de passe généré"
                />

                <label>
                    Longueur (Exemple: <strong>4-40</strong>): {length}
                    <input
                        type="range"
                        min="4"
                        max="40"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                    />
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={includeUppercase}
                        onChange={(e) => setIncludeUppercase(e.target.checked)}
                    />
                    Inclure des majuscules (Exemple: <strong>A, B, C</strong>)
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                    />
                    Inclure des chiffres (Exemple: <strong>1, 2, 3</strong>)
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                    />
                    Inclure des symboles (Exemple: <strong>!, @, #, $, %, ^</strong>)
                </label>
                <br />
                <button onClick={generatePassword} className="generate-button">
                    Générer
                </button>
                <button
                    onClick={copyToClipboard}
                    disabled={!password}
                    style={{ backgroundColor: "#058686", color: "#fff" }}
                >
                    Copier
                </button>

            </article>
        </>
    );
};

export default PasswordGenerator;