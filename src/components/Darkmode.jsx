import { useState, useEffect } from 'react';


// Importez les fichiers audio
import daySound from './Audio/jour.wav';
import nightSound from './Audio/nuit.wav';

const lightTheme = 'light-theme';
const darkTheme = 'dark-theme';

const Dark = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [dayAudio] = useState(new Audio(daySound));
    const [nightAudio] = useState(new Audio(nightSound));

    useEffect(() => {
        // Appliquer les classes de thème au body
        document.body.classList.toggle(lightTheme, !isDarkMode);
        document.body.classList.toggle(darkTheme, isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // Jouez le son correspondant au mode
        if (isDarkMode) {
            dayAudio.play();
        } else {
            nightAudio.play();
        }
    };

    return (
        <div className="App">
                <button onClick={toggleDarkMode}>
                    {isDarkMode ? 'Mode Jour' : 'Mode Nuit'}
                </button>
        </div>
    );
};

export default Dark;
